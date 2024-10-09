package sandbox.util;

import java.util.List;
import java.util.stream.Stream;

import sandbox.constant.Selectable;
import sandbox.controller.common.SelectOptionDto;

public class EnumUtils {

  /**
   * Enumからセレクトボックス用の値を取得する
   * TODO 返り値について理解する必要あり
   * 
   * @param <E>
   * @param enumType
   * @return
   */
  public static <E extends Enum<E> & Selectable> List<SelectOptionDto<String>> getOptions(Class<E> enumType) {
    return Stream.of(enumType.getEnumConstants()).map(e -> new SelectOptionDto<>(e.getLabel(), e.name())).toList();

  }
}
