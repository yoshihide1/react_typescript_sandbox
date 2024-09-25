package sandbox.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import sandbox.entity.TodoEntity;
import sandbox.entity.example.TodoEntityExample;

@Mapper
public interface TodoEntityMapper {
    long countByExample(TodoEntityExample example);

    int deleteByExample(TodoEntityExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(TodoEntity record);

    int insertSelective(TodoEntity record);

    List<TodoEntity> selectByExample(TodoEntityExample example);

    TodoEntity selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") TodoEntity record, @Param("example") TodoEntityExample example);

    int updateByExample(@Param("record") TodoEntity record, @Param("example") TodoEntityExample example);

    int updateByPrimaryKeySelective(TodoEntity record);

    int updateByPrimaryKey(TodoEntity record);
}