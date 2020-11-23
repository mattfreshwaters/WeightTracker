package WeightTrackerSB.models;

public class User {

    private Integer userId;
    private String firstName;
    private String lastName;

    public  User(){

    }

    public User(User that){
        this.userId = that.userId;
        this.firstName = that.firstName;
        this.lastName = that.lastName;
    }

    public Integer getUserId(){
        return userId;
    }
    public void setUserId(Integer userId){this.userId = userId;}

    public String getFirstName(){return firstName;}
    public void setFirstName(String firstName){this.firstName = firstName;}

    public String getLastName(){return lastName;}
    public void setLastName(String lastName){this.lastName = lastName;}
}
