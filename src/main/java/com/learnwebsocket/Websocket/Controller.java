package com.learnwebsocket.Websocket;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class Controller {
    @MessageMapping("/message")
    @SendTo("/msg/return")
    public MassageModal massageevery(@RequestBody MassageModal massageModal){

        try {
            Thread.sleep(100,0);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        return massageModal;
    }
}
