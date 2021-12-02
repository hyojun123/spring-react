package com.example.springreact.lotto.controller;

import com.example.springreact.lotto.model.LottoDto;
import com.example.springreact.lotto.service.LottoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class LottoApiController {

    @Autowired
    private LottoService lottoService;

    @GetMapping("/api/lotto")
    public List<LottoDto> wwwLotto(String phone) {
        return lottoService.getRecommendList(phone);
    }
}
