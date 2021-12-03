package com.example.springreact.entity;

import com.example.springreact.board.dto.BoardDto;
import com.example.springreact.common.entity.TimeEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="TB_BOARD")
@DynamicInsert
@Entity
public class BoardEntity extends TimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String writer;
    @Column(length = 4000)
    private String content;

    @ColumnDefault("'0'")
    private Integer viewCnt;

    public BoardEntity(BoardDto boardDto) {
        this.title = boardDto.getTitle();
        this.writer = boardDto.getWriter();
        this.content = boardDto.getContent();
    }
}
