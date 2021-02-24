package com.infomax.web.services;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface FileStorageService {
    public void storeFile(String title, String description, MultipartFile file) throws IOException;

}
