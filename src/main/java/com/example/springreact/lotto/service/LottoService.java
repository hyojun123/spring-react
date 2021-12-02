package com.example.springreact.lotto.service;

import com.example.springreact.lotto.model.LottoDto;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class LottoService {

    // 추천 갯수
    private static final Integer SIZE = 5;

    public List<LottoDto> getRecommendList(String phone) {
        return makeRecommendList();
    }

    private List<LottoDto> makeRecommendList() {
        List<LottoDto> result = new ArrayList<>();


        for(int i = 0 ; i < SIZE; i++) {
            LottoDto lottoDto = new LottoDto();
            Set<Integer> set = new HashSet<>();
            while (set.size() < 6) {
                Double d = Math.random() * 45 + 1;
                set.add(d.intValue());
            }
            List<Integer> list = new ArrayList<>(set);
            Collections.sort(list);

            lottoDto.setDrwtNo1(list.get(0));
            lottoDto.setDrwtNo2(list.get(1));
            lottoDto.setDrwtNo3(list.get(2));
            lottoDto.setDrwtNo4(list.get(3));
            lottoDto.setDrwtNo5(list.get(4));
            lottoDto.setDrwtNo6(list.get(5));

            result.add(lottoDto);

        }

        return result;
    }
}
