package com.example.billetter;

import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class BilletterRepository {
    private List<Billeter> billeterList = new ArrayList<>();

    public void saveBillett(Billeter innBillett) {
        billeterList.add(innBillett);
    }

    public List<Billeter> listAlleBilletter() {
        return billeterList;
    }

    public void delete_alle() {
        billeterList.clear();
    }
}