package com.example.springreact.board.service;

import com.example.springreact.board.dto.BoardDto;
import com.example.springreact.board.repository.BoardRepository;
import com.example.springreact.entity.BoardEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class BoardService {

    @Autowired
    private BoardRepository boardRepository;


    public void postWrite(BoardDto boardDto) {
        boardRepository.save(new BoardEntity(boardDto));
    }

    public List<BoardDto> getBoardList() {
        return boardRepository.findAll().stream().map(BoardDto::new).collect(Collectors.toList());
    }
}
