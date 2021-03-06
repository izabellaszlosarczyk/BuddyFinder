package com.tai.model;

import com.tai.database.AbstractModel;
import com.tai.model.User;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by izabella on 23.04.16.
 */
@Document(collection = "Offer")
public class Offer  extends AbstractModel {
    private String type;
    @DBRef
    private User user;
    @DBRef
    private List<Timer> when;
    private String where;
    private String anotherInfo;
    private String preferredSex;
    private String preferredAge;

    public Offer(){
        this.when = new ArrayList<>();
    }

    public List<Timer> getWhen() {
        return when;
    }

    public void addWhen(Timer when){
        this.when.add(when);
    }

    public String getWhere() {
        return where;
    }

    public void setWhere(String where) {
        this.where = where;
    }

    public String getAnotherInfo() {
        return anotherInfo;
    }

    public void setAnotherInfo(String anotherInfo) {
        this.anotherInfo = anotherInfo;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User userId) {
        this.user = userId;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getPreferredSex() {
        return preferredSex;
    }

    public void setPreferredSex(String preferredSex) {
        this.preferredSex = preferredSex;
    }

    public String getPreferredAge() {
        return preferredAge;
    }

    public void setPreferredAge(String preferredAge) {
        this.preferredAge = preferredAge;
    }
}
