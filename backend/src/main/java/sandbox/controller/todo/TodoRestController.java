package sandbox.controller.todo;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import sandbox.constant.ApiConstants;
import sandbox.constant.Priority;
import sandbox.controller.todo.form.TodoCreateForm;
import sandbox.mapper.TodoEntityMapper;
import sandbox.util.EnumUtils;

/**
 * Todo, APIコントローラー
 */
@RestController
@RequestMapping(ApiConstants.TODO_PATH)
public class TodoRestController {

  @Autowired
  private TodoEntityMapper mapper;

  /**
   *
   * @return Todo画面表示用のDTO
   */
  @GetMapping("")
  public TodoResponseDto index() {
    var priorityOptions = EnumUtils.getOptions(Priority.class);
    var todoList = mapper.selectAll();

    return new TodoResponseDto(priorityOptions, todoList);
  }

  /**
   * TODOを登録する
   *
   * @param form
   */
  @PostMapping("create")
  public void create(@RequestBody TodoCreateForm form) {
    System.out.println(form);
    mapper.insert(form.toEntity());
  }

  @DeleteMapping("delete/{id}")
  public void delete(@PathVariable Integer id) throws IllegalAccessException {
    var target = Optional.of(mapper.selectByPrimaryKey(id));
    if (target.isPresent()) {
      mapper.deleteByPrimaryKey(id);
    } else {
      throw new IllegalAccessException("対象のIDは存在しません");
    }

  }
}
