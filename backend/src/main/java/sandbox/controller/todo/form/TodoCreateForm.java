package sandbox.controller.todo.form;

import java.time.LocalDateTime;

import org.springframework.beans.BeanUtils;

import lombok.Data;
import sandbox.entity.TodoEntity;

/**
 * TODOの新規作成時のフォーム
 */
@Data
public class TodoCreateForm {
  private String task;
  private LocalDateTime createdAt = LocalDateTime.now();
  private LocalDateTime updatedAt = LocalDateTime.now();

  /**
   * Entityに変換する
   */
  public TodoEntity toEntity() {
    var entity = new TodoEntity();
    BeanUtils.copyProperties(this, entity);
    System.out.println(entity);
    return entity;
  }

}
