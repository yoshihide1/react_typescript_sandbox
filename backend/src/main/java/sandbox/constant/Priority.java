package sandbox.constant;

import java.util.List;
import java.util.stream.Stream;

import lombok.Getter;
import sandbox.controller.common.SelectOptionDto;

/**
 * 重要度のEnum
 */
public enum Priority implements Selectable {
  HIGH("高"), MIDDLE("中"), LOW("低");

  @Getter
  private final String label;

  Priority(String label) {
    this.label = label;
  }

  public List<SelectOptionDto<String>> getOptions() {
    return Stream.of(Priority.values()).map(p -> new SelectOptionDto<>(p.getLabel(), p.name())).toList();
  }

}
