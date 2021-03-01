package com.infomax.web.converters;

import java.util.Base64;

public class ImageConverter {
    public String getImageData(byte[] byteData){
        return Base64.getMimeEncoder().encodeToString(byteData);
    }
}
