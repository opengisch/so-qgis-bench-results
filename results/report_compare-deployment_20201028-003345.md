# QGIS Benchmark summary compare-deployment (20201028-003345)


compare different types of deployment for QGIS server 3.10 using the same settings

_run completed in 02h 01m 35s_
## Summary plot
An interactive summary plot can be found [here](report_compare-deployment_20201028-003345_plot.html)

## Summary
| name                               | group   |   duration s |   medianResTime |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|------------------------------------|---------|--------------|-----------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-singlethread-multiinstance | Global  |       9718.2 |          2625.5 |               0   |         11187 |            0 |     7745.8 |    4810.47 |     2680   |      97   |   74      |      14.3 |          0 |
| qgis310-balanced-unlimited-threads | Global  |      15244.3 |          4121   |              56.9 |         11187 |            0 |     7137.4 |    4352.87 |     2480.9 |      77.8 |   46.9667 |      11.3 |          0 |
| qgis310-balanced                   | Global  |      16251   |          4510.5 |              67.2 |         11187 |            0 |     7068.2 |    4151.93 |     2467.3 |      74.5 |   43.6667 |      11   |          0 |
| qgis310-multithread-singleinstance | Global  |      45120.1 |         12552   |             364.3 |         11187 |            0 |     6736   |    3719.8  |     2319.1 |      42.8 |   16.2333 |      10.5 |          0 |

## Aggregated
| name                                                             | group                    |   duration s |   medianResTime |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|------------------------------------------------------------------|--------------------------|--------------|-----------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-singlethread-multiinstance > somap310_grundplanav_farbig | somap_grundplanav_farbig |        952.8 |          1248   |               0   |           735 |            0 |     5030.2 |     4338.3 |     2875.9 |      94.4 |      73.8 |      26.5 |          0 |
| qgis310-balanced-unlimited-threads > somap310_grundplanav_farbig | somap_grundplanav_farbig |       1313.5 |          1764   |              37.9 |           735 |            0 |     4241.6 |     3731.2 |     2815   |      75.3 |      50.4 |      26.6 |          0 |
| qgis310-balanced > somap310_grundplanav_farbig                   | somap_grundplanav_farbig |       1464.8 |          1979   |              53.7 |           735 |            0 |     4037.8 |     3499.5 |     2634.6 |      74.5 |      45.7 |      27.6 |          0 |
| qgis310-multithread-singleinstance > somap310_grundplanav_farbig | somap_grundplanav_farbig |       3780.6 |          5298   |             296.8 |           735 |            0 |     3368.1 |     2896.2 |     2367.9 |      37.2 |      17.6 |      12.5 |          0 |
| qgis310-singlethread-multiinstance > somap310_grundplanav_sw     | somap_grundplanav_sw     |       6469.5 |          1109.5 |               0   |          5190 |            0 |     7745.8 |     6323   |     4138.2 |      97   |      74.2 |      26.9 |          0 |
| qgis310-balanced-unlimited-threads > somap310_grundplanav_sw     | somap_grundplanav_sw     |      10258.5 |          1829   |              58.6 |          5190 |            0 |     7137.4 |     5755.7 |     3395.5 |      77.8 |      44.9 |      26.2 |          0 |
| qgis310-balanced > somap310_grundplanav_sw                       | somap_grundplanav_sw     |      10864.7 |          1963   |              67.9 |          5190 |            0 |     7068.2 |     5551.6 |     3169.8 |      64.9 |      42.6 |      12.7 |          0 |
| qgis310-multithread-singleinstance > somap310_grundplanav_sw     | somap_grundplanav_sw     |      30372.2 |          5713   |             369.5 |          5190 |            0 |     6736   |     5145.3 |     2590.6 |      28.4 |      15.2 |      12.4 |          0 |
| qgis310-singlethread-multiinstance > somap310_lk                 | somap_lk                 |       2295.9 |           268   |               0   |          5262 |            0 |     5325.2 |     3770.1 |     2680   |      93.8 |      74   |      14.3 |          0 |
| qgis310-balanced-unlimited-threads > somap310_lk                 | somap_lk                 |       3672.3 |           528   |              60   |          5262 |            0 |     5010.9 |     3571.7 |     2480.9 |      66   |      45.6 |      11.3 |          0 |
| qgis310-balanced > somap310_lk                                   | somap_lk                 |       3921.5 |           568.5 |              70.8 |          5262 |            0 |     4511   |     3404.7 |     2467.3 |      69.6 |      42.7 |      11   |          0 |
| qgis310-multithread-singleinstance > somap310_lk                 | somap_lk                 |      10967.4 |          1541   |             377.7 |          5262 |            0 |     4155.9 |     3117.9 |     2319.1 |      42.8 |      15.9 |      10.5 |          0 |

## Detail
| name                                                                                                                                                                                                                                      | group                                   |   duration s |   group penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|--------------|-------------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis310-singlethread-multiinstance > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment/20201028-003345/qgis310-singlethread-multiinstance/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |        952.8 |               0   |           735 |            0 |          0 |      1296.26  |          1248   |          347 |         4047 |        1920.8 |       2104    |       3318.64 |      9.14486 |               1338.33  |           4.02642  |     5030.2 |     4338.3 |     2875.9 |      94.4 |      73.8 |      26.5 |
| [qgis310-balanced-unlimited-threads > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment/20201028-003345/qgis310-balanced-unlimited-threads/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |       1313.5 |              37.9 |           735 |            0 |          0 |      1787.04  |          1764   |          633 |         4646 |        2418.8 |       2803.2  |       4136.56 |      6.65032 |                973.263 |           2.92809  |     4241.6 |     3731.2 |     2815   |      75.3 |      50.4 |      26.6 |
| [qgis310-balanced > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment/20201028-003345/qgis310-balanced/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html)                                     | somap_grundplanav_farbig > av_f_big.txt |       1464.8 |              53.7 |           735 |            0 |          0 |      1992.99  |          1979   |          627 |         5244 |        2711   |       2956.6  |       3894.04 |      5.96117 |                872.418 |           2.62466  |     4037.8 |     3499.5 |     2634.6 |      74.5 |      45.7 |      27.6 |
| [qgis310-multithread-singleinstance > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment/20201028-003345/qgis310-multithread-singleinstance/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |       3780.6 |             296.8 |           735 |            0 |          0 |      5143.65  |          5298   |         2316 |         8539 |        6506.4 |       7481    |       8019.8  |      2.31564 |                338.893 |           1.01956  |     3368.1 |     2896.2 |     2367.9 |      37.2 |      17.6 |      12.5 |
| [qgis310-singlethread-multiinstance > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-deployment/20201028-003345/qgis310-singlethread-multiinstance/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw_big.txt    |       6469.5 |               0   |          5190 |            0 |          0 |      1246.54  |          1109.5 |          222 |         9166 |        2159.8 |       2550.45 |       3597.67 |      9.57158 |               2590.47  |           4.16869  |     7745.8 |     6323   |     4138.2 |      97   |      74.2 |      26.9 |
| [qgis310-balanced-unlimited-threads > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-deployment/20201028-003345/qgis310-balanced-unlimited-threads/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw_big.txt    |      10258.5 |              58.6 |          5190 |            0 |          0 |      1976.58  |          1829   |          556 |        10283 |        3133.8 |       3580.45 |       4992.08 |      6.04882 |               1637.09  |           2.63443  |     7137.4 |     5755.7 |     3395.5 |      77.8 |      44.9 |      26.2 |
| [qgis310-balanced > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-deployment/20201028-003345/qgis310-balanced/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)                                           | somap_grundplanav_sw > av_sw_big.txt    |      10864.7 |              67.9 |          5190 |            0 |          0 |      2093.39  |          1963   |          621 |        11191 |        3228.8 |       3738.9  |       5547.86 |      5.71236 |               1546.02  |           2.48789  |     7068.2 |     5551.6 |     3169.8 |      64.9 |      42.6 |      12.7 |
| [qgis310-multithread-singleinstance > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-deployment/20201028-003345/qgis310-multithread-singleinstance/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw_big.txt    |      30372.2 |             369.5 |          5190 |            0 |          0 |      5852.05  |          5713   |         2200 |        23278 |        8339.9 |       9575.45 |      12944.9  |      2.04751 |                554.145 |           0.891748 |     6736   |     5145.3 |     2590.6 |      28.4 |      15.2 |      12.4 |
| [qgis310-singlethread-multiinstance > somap310_lk > lk_big.txt](../results/details/compare-deployment/20201028-003345/qgis310-singlethread-multiinstance/somap310_lk/lk_big.txt/dashboard/index.html)                                     | somap_lk > lk_big.txt                   |       2295.9 |               0   |          5262 |            0 |          0 |       436.32  |           268   |           34 |         3120 |        1044.7 |       1336.85 |       2137.59 |     27.1838  |               1286.72  |          13.7701   |     5325.2 |     3770.1 |     2680   |      93.8 |      74   |      14.3 |
| [qgis310-balanced-unlimited-threads > somap310_lk > lk_big.txt](../results/details/compare-deployment/20201028-003345/qgis310-balanced-unlimited-threads/somap310_lk/lk_big.txt/dashboard/index.html)                                     | somap_lk > lk_big.txt                   |       3672.3 |              60   |          5262 |            0 |          0 |       697.897 |           528   |           49 |         4417 |        1477   |       1828    |       2877.07 |     17.0629  |                807.672 |           8.64328  |     5010.9 |     3571.7 |     2480.9 |      66   |      45.6 |      11.3 |
| [qgis310-balanced > somap310_lk > lk_big.txt](../results/details/compare-deployment/20201028-003345/qgis310-balanced/somap310_lk/lk_big.txt/dashboard/index.html)                                                                         | somap_lk > lk_big.txt                   |       3921.5 |              70.8 |          5262 |            0 |          0 |       745.245 |           568.5 |           34 |         4825 |        1589.7 |       1968    |       3041.22 |     15.9771  |                756.282 |           8.09327  |     4511   |     3404.7 |     2467.3 |      69.6 |      42.7 |      11   |
| [qgis310-multithread-singleinstance > somap310_lk > lk_big.txt](../results/details/compare-deployment/20201028-003345/qgis310-multithread-singleinstance/somap310_lk/lk_big.txt/dashboard/index.html)                                     | somap_lk > lk_big.txt                   |      10967.4 |             377.7 |          5262 |            0 |          0 |      2084.27  |          1541   |          167 |        12616 |        4104   |       5001.85 |       7779.36 |      5.71916 |                270.729 |           2.89706  |     4155.9 |     3117.9 |     2319.1 |      42.8 |      15.9 |      10.5 |

### used global configuration

```
cpu-cores: 4
deploy-method: docker-swarm
logs-dir: /home/ubuntu/so-qgis-bench/logs/prepared
parallel-requests: 10
reports-dir: ./reports/
result-dir: /home/ubuntu/so-qgis-bench/results

```
### test configurations

```
description: 'compare different types of deployment for QGIS server 3.10 using the same settings'

test-cases:

  qgis310-singlethread-multiinstance:
    active: yes
    parallel-requests: 12
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.10'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_SERVER_CACHE_SIZE: '50'
      PG_SERVICE: 'pg_service.conf'
    projects:
      somap310_lk:
        - lk_big.txt
      somap310_grundplanav_farbig:
        - av_f_big.txt
      somap310_grundplanav_sw:
        - av_sw_big.txt

  qgis310-multithread-singleinstance:
    inherit: qgis310-singlethread-multiinstance
    compose-variables:
      QGIS_REPLICAS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_SERVER_MAX_THREADS: '6'

  qgis310-balanced:
    inherit: qgis310-singlethread-multiinstance
    compose-variables:
      QGIS_REPLICAS: '3'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_SERVER_MAX_THREADS: '2'

  qgis310-balanced-unlimited-threads:
    inherit: qgis310-balanced
    compose-variables:
      QGIS_SERVER_MAX_THREADS: '-1'

```
### parsed test configurations

```
description: compare different types of deployment for QGIS server 3.10 using the
  same settings
test-cases:
  qgis310-balanced:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '3'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '2'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-singlethread-multiinstance
    parallel-requests: 12
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f_big.txt
      somap310_grundplanav_sw:
      - av_sw_big.txt
      somap310_lk:
      - lk_big.txt
    template: docker-compose-qgis-3-nginx
  qgis310-balanced-unlimited-threads:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '3'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '-1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-balanced
    parallel-requests: 12
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f_big.txt
      somap310_grundplanav_sw:
      - av_sw_big.txt
      somap310_lk:
      - lk_big.txt
    template: docker-compose-qgis-3-nginx
  qgis310-multithread-singleinstance:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '6'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-singlethread-multiinstance
    parallel-requests: 12
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f_big.txt
      somap310_grundplanav_sw:
      - av_sw_big.txt
      somap310_lk:
      - lk_big.txt
    template: docker-compose-qgis-3-nginx
  qgis310-singlethread-multiinstance:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
      QGIS_VERSION: '3.10'
    parallel-requests: 12
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f_big.txt
      somap310_grundplanav_sw:
      - av_sw_big.txt
      somap310_lk:
      - lk_big.txt
    template: docker-compose-qgis-3-nginx

```