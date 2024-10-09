package sandbox.controller.todo.form;

import java.time.OffsetDateTime;

import org.springframework.beans.BeanUtils;

import lombok.Data;
import sandbox.constant.Priority;
import sandbox.entity.TodoEntity;

/**
 * TODOの新規作成時のフォーム
 */
@Data
public class TodoCreateForm {
  private String task;
  private Priority priority;
  private OffsetDateTime createdAt = OffsetDateTime.now();
  private OffsetDateTime updatedAt = OffsetDateTime.now();

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
