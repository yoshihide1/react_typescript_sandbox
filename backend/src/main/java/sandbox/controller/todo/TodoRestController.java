package sandbox.controller.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import sandbox.constant.ApiConstants;
import sandbox.controller.todo.form.TodoCreateForm;
import sandbox.mapper.TodoEntityMapper;

/**
 * Todo, APIコントローラー
 */
@RestController
@RequestMapping(ApiConstants.TODO_PATH)
public class TodoRestController {

  @Autowired
  private TodoEntityMapper mapper;

  @PostMapping("create")
  public void create(@RequestBody TodoCreateForm form) {
    System.out.println(form);
    mapper.insert(form.toEntity());
  }
}
