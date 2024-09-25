package sandbox.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import sandbox.entity.TodoEntity;
import sandbox.entity.TodoEntityExample;

@Mapper
public interface TodoEntityMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table public.todo
     *
     * @mbg.generated
     */
    long countByExample(TodoEntityExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table public.todo
     *
     * @mbg.generated
     */
    int deleteByExample(TodoEntityExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table public.todo
     *
     * @mbg.generated
     */
    int deleteByPrimaryKey(Integer id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table public.todo
     *
     * @mbg.generated
     */
    int insert(TodoEntity record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table public.todo
     *
     * @mbg.generated
     */
    int insertSelective(TodoEntity record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table public.todo
     *
     * @mbg.generated
     */
    List<TodoEntity> selectByExample(TodoEntityExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table public.todo
     *
     * @mbg.generated
     */
    TodoEntity selectByPrimaryKey(Integer id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table public.todo
     *
     * @mbg.generated
     */
    int updateByExampleSelective(@Param("record") TodoEntity record, @Param("example") TodoEntityExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table public.todo
     *
     * @mbg.generated
     */
    int updateByExample(@Param("record") TodoEntity record, @Param("example") TodoEntityExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table public.todo
     *
     * @mbg.generated
     */
    int updateByPrimaryKeySelective(TodoEntity record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table public.todo
     *
     * @mbg.generated
     */
    int updateByPrimaryKey(TodoEntity record);
}