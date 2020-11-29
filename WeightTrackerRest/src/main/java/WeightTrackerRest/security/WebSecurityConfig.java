package WeightTrackerRest.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter{

    @Bean
    public AuthTokenFilter getFilter(){
        AuthTokenFilter filter = new AuthTokenFilter();
        return filter;
    }

    @Autowired
    UserDetailsServiceImpl userDetailsService;

    @Autowired
    JwtAuthEntryPoint entryPoint;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        super.configure(auth);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .cors()
                .and()
                .csrf().disable()
                .exceptionHandling()
                .authenticationEntryPoint( entryPoint )
                .and()
                .sessionManagement().sessionCreationPolicy( SessionCreationPolicy.STATELESS )
                .and()
                .authorizeRequests()
                .antMatchers( "/" ).permitAll()

                //TODO: limit this to GET

                .antMatchers(HttpMethod.GET, "/api/goalData/").authenticated()
                .antMatchers(HttpMethod.GET, "/api/goalData/{id}").permitAll()
                .antMatchers(HttpMethod.POST, "/api/goalData/").permitAll()
                .antMatchers(HttpMethod.PUT, "/api/goalData/").permitAll()
                .antMatchers(HttpMethod.DELETE, "/api/goalData/**").permitAll()

                .antMatchers(HttpMethod.GET, "/api/entryData/").authenticated()
                .antMatchers(HttpMethod.GET, "/api/entryData/{id}").permitAll()
                .antMatchers(HttpMethod.POST, "/api/entryData/").permitAll()
                .antMatchers(HttpMethod.PUT, "/api/entryData/").permitAll()
                .antMatchers(HttpMethod.DELETE, "/api/entryData/**").permitAll()

                .antMatchers( HttpMethod.GET, "/api/userdata", "/api/userdata/**").hasRole("ADMIN")
                .antMatchers( HttpMethod.POST, "/api/userdata" ).hasRole("ADMIN")
                .antMatchers( HttpMethod.PUT, "/api/userdata" ).hasRole("ADMIN")
                .antMatchers( HttpMethod.DELETE, "/api/userdata/**" ).hasRole("ADMIN")


                .antMatchers( HttpMethod.POST, "/api/auth/signin").permitAll()
                .antMatchers( HttpMethod.POST, "/api/auth/signup").permitAll()


                .anyRequest().authenticated()
                .and().addFilterBefore(getFilter(), UsernamePasswordAuthenticationFilter.class);


    }


    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }


    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

}
