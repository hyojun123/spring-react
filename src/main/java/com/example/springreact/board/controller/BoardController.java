package com.example.springreact.board.controller;

import com.example.springreact.board.dto.BoardDto;
import com.example.springreact.board.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/board")
public class BoardController {

    @Autowired
    private BoardService boardService;

    @PostMapping("")
    public void postWrite(@RequestBody BoardDto boardDto) {
        boardService.postWrite(boardDto);
    }

    @GetMapping("")
    public List<BoardDto> getBoardList() {
        return boardService.getBoardList();
    }
}
