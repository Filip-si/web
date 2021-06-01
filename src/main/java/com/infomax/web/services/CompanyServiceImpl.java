package com.infomax.web.services;

import com.infomax.web.models.AppUser;
import com.infomax.web.models.Company;
import com.infomax.web.models.TradeFairs;
import com.infomax.web.repositories.CompanyRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompanyServiceImpl {
    private final CompanyRepository companyRepository;

    public CompanyServiceImpl(CompanyRepository companyRepository) {
        this.companyRepository = companyRepository;
    }

    //add, delete, mod, display

    public void addCompany(String name, String description, String phone, String address, String email, String link, String icon, String[] socials, AppUser author, TradeFairs tradeFairs){
        Company company = new Company(name, description, phone, address, email, link, icon, socials, author, tradeFairs);
        companyRepository.save(company);
    }

    public void deleteCompany(Company company){
        companyRepository.delete(company);
    }

    public void modCompany(){
        //mod
    }







}
