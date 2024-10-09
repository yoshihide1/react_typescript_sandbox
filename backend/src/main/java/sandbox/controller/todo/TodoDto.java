package sandbox.controller.todo;

import sandbox.constant.Priority;

public record TodoDto(Integer id, Priority priority, String task) {

  public String getPriority() {
    return this.priority.getLabel();
  }

}
