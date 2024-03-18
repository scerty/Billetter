package com.example.billetter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class HomeController {

    @Autowired
    private BilletterRepository rep;
    @CrossOrigin(origins = "http://localhost:63342")
    @PostMapping("/save_data")
    public void lagreKunde(Billeter innBillett){
        rep.saveBillett(innBillett);
    }
    @CrossOrigin(origins = "http://localhost:63342")
    @GetMapping("/list_data")
    public List<Billeter> hentAlle(){
        return rep.listAlleBilletter();
    }
    @CrossOrigin(origins = "http://localhost:63342")
    @GetMapping("/delete_data")
    public void slettAlle(){
        rep.delete_alle();
    }


}
