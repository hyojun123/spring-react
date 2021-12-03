package com.example.springreact.board.dto;

import com.example.springreact.entity.BoardEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BoardDto {
    private Long id;
    private String title;
    private String writer;
    private String content;
    private Integer viewCnt;
    private LocalDateTime regTsp;
    private LocalDateTime modTsp;

    public BoardDto(BoardEntity t) {
        this.id = t.getId();
        this.title = t.getTitle();
        this.writer = t.getWriter();
        this.content = t.getContent();
        this.viewCnt = t.getViewCnt();
        this.regTsp = t.getRegTsp();
        this.modTsp = t.getModTsp();
    }
}
