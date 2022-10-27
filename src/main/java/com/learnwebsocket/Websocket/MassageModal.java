package com.learnwebsocket.Websocket;

public class MassageModal {
    private String name;
    private String massage;
    public MassageModal(String name, String massage) {
        this.name = name;
        this.massage = massage;
    }
    public MassageModal() {
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getMassage() {
        return massage;
    }
    public void setMassage(String massage) {
        this.massage = massage;
    }
    @Override
    public String toString() {
        return "MassageModal [name=" + name + ", massage=" + massage + "]";
    }
    
}
