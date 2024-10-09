package sandbox.controller.todo;

import java.util.List;

import sandbox.controller.common.SelectOptionDto;

/**
 * Todo画面初期表示用のDTO
 */
public record TodoResponseDto(List<SelectOptionDto<String>> priorityOptions, List<TodoDto> todoList) {
}
