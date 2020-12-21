//D:\yutao\前端案例\angular-architecture-patterns\src\app\app-config.services.ts
interface ConfigService {
  load();
  getEnv(key: any)
/**
 * 根据给定键返回配置值
 *
 * @param key
 */
get(key: any)
}
