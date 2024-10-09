package sandbox.controller.common;

/**
 * セレクトボックス用のDTO
 */
public record SelectOptionDto<T>(String label, T value) {
}
