package sandbox.controller.todo;

import lombok.Getter;
import sandbox.entity.TodoEntity;

@Getter
public class TaskDto {
  private final Integer id;
  private final String priority;
  private final String task;

  public TaskDto(TodoEntity entity) {
    this.id = entity.getId();
    this.priority = entity.getPriority().getLabel();
    this.task = entity.getTask();
  }
}
