# QGIS Benchmark summary compare-deployment-sequential (20201014-000413)


compare different types of deployment for QGIS server 3.10 using the same settings

_run completed in 00h 28m 54s_
## Summary plot
An interactive summary plot can be found [here](report_compare-deployment-sequential_20201014-000413_plot.html)

## Summary
| name                               | group   |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|------------------------------------|---------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-unlimited-threads          | Global  |        351.2 |               0   |           785 |            0 |     3718.3 |    2904.93 |     2544.5 |      34   |   19.6333 |      10   |          0 |
| qgis310-multithread-singleinstance | Global  |        354.7 |               1   |           785 |            0 |     3496.5 |    2695.97 |     2505.7 |      30.8 |   17.9667 |       9.5 |          0 |
| qgis310-balanced                   | Global  |        424.8 |              21   |           785 |            0 |     3726.4 |    2861    |     2575.4 |      40.5 |   17.2333 |       9.6 |          0 |
| qgis310-singlethread-multiinstance | Global  |        532.1 |              51.5 |           785 |            0 |     4092.4 |    3128.87 |     2705.2 |      30.9 |   15      |      11.9 |          0 |

## Aggregated
| name                                                             | group                    |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|------------------------------------------------------------------|--------------------------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-unlimited-threads > somap310_grundplanav_farbig          | somap_grundplanav_farbig |        336.3 |               0   |           735 |            0 |     3718.3 |     3185.6 |     2593.9 |      34   |      20   |      12.7 |          0 |
| qgis310-multithread-singleinstance > somap310_grundplanav_farbig | somap_grundplanav_farbig |        339.8 |               1   |           735 |            0 |     3496.5 |     2917.1 |     2522   |      27.8 |      19.7 |      12.5 |          0 |
| qgis310-balanced > somap310_grundplanav_farbig                   | somap_grundplanav_farbig |        408.6 |              21.5 |           735 |            0 |     3726.4 |     3131.8 |     2638.1 |      40.5 |      16.5 |      12.4 |          0 |
| qgis310-singlethread-multiinstance > somap310_grundplanav_farbig | somap_grundplanav_farbig |        513.9 |              52.8 |           735 |            0 |     4092.4 |     3402.4 |     2750.7 |      30.9 |      13.1 |      11.9 |          0 |
| qgis310-multithread-singleinstance > somap310_grundplanav_sw     | somap_grundplanav_sw     |         12.4 |               0.6 |            20 |            0 |     2838.2 |     2664.6 |     2586.3 |      30.8 |      18.3 |      12.8 |          0 |
| qgis310-unlimited-threads > somap310_grundplanav_sw              | somap_grundplanav_sw     |         12.4 |               0   |            20 |            0 |     3130.1 |     2939.5 |     2881.6 |      30.8 |      18.8 |      13.2 |          0 |
| qgis310-balanced > somap310_grundplanav_sw                       | somap_grundplanav_sw     |         13.4 |               8.1 |            20 |            0 |     3027.5 |     2848.9 |     2778.1 |      31.1 |      17.3 |      14.4 |          0 |
| qgis310-singlethread-multiinstance > somap310_grundplanav_sw     | somap_grundplanav_sw     |         14.9 |              20.9 |            20 |            0 |     3408.2 |     3228.3 |     3159.7 |      30.4 |      15.5 |      12.3 |          0 |
| qgis310-multithread-singleinstance > somap310_lk                 | somap_lk                 |          2.4 |               0   |            30 |            0 |     2506.7 |     2506.2 |     2505.7 |      22.2 |      15.9 |       9.5 |          0 |
| qgis310-unlimited-threads > somap310_lk                          | somap_lk                 |          2.5 |               2.7 |            30 |            0 |     2612.5 |     2589.7 |     2544.5 |      30.6 |      20.1 |      10   |          0 |
| qgis310-balanced > somap310_lk                                   | somap_lk                 |          2.8 |              15.2 |            30 |            0 |     2623.4 |     2602.3 |     2575.4 |      27.4 |      17.9 |       9.6 |          0 |
| qgis310-singlethread-multiinstance > somap310_lk                 | somap_lk                 |          3.3 |              34.6 |            30 |            0 |     2779.3 |     2755.9 |     2705.2 |      25.6 |      16.4 |      13.2 |          0 |

## Detail
| name                                                                                                                                                                                                                                                 | group                                   |   duration s |   group penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|--------------|-------------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis310-unlimited-threads > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment-sequential/20201014-000413/qgis310-unlimited-threads/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html)                   | somap_grundplanav_farbig > av_f_big.txt |        336.3 |               0   |           735 |            0 |          0 |      457.605  |           380   |          175 |         2851 |         689   |        832    |       1615.12 |      2.17822 |                318.778 |           0.959056 |     3718.3 |     3185.6 |     2593.9 |      34   |      20   |      12.7 |
| [qgis310-multithread-singleinstance > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment-sequential/20201014-000413/qgis310-multithread-singleinstance/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |        339.8 |               1   |           735 |            0 |          0 |      462.38   |           406   |          159 |         2732 |         697.8 |        821.2  |       1278.16 |      2.15591 |                315.511 |           0.949233 |     3496.5 |     2917.1 |     2522   |      27.8 |      19.7 |      12.5 |
| [qgis310-balanced > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment-sequential/20201014-000413/qgis310-balanced/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html)                                     | somap_grundplanav_farbig > av_f_big.txt |        408.6 |              21.5 |           735 |            0 |          0 |      555.971  |           524   |          170 |         3065 |         784   |        952.4  |       1709.44 |      1.79389 |                262.527 |           0.789837 |     3726.4 |     3131.8 |     2638.1 |      40.5 |      16.5 |      12.4 |
| [qgis310-singlethread-multiinstance > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment-sequential/20201014-000413/qgis310-singlethread-multiinstance/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |        513.9 |              52.8 |           735 |            0 |          0 |      699.227  |           688   |          168 |         3396 |        1022.2 |       1257    |       2754.68 |      1.42718 |                208.864 |           0.628378 |     4092.4 |     3402.4 |     2750.7 |      30.9 |      13.1 |      11.9 |
| [qgis310-multithread-singleinstance > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-deployment-sequential/20201014-000413/qgis310-multithread-singleinstance/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)               | somap_grundplanav_sw > av_sw.txt        |         12.4 |               0.6 |            20 |            0 |          0 |      622.4    |           390   |          207 |         2392 |        1298.3 |       2338.15 |       2392    |      1.59987 |                497.795 |           0.669946 |     2838.2 |     2664.6 |     2586.3 |      30.8 |      18.3 |      12.8 |
| [qgis310-unlimited-threads > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-deployment-sequential/20201014-000413/qgis310-unlimited-threads/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)                                 | somap_grundplanav_sw > av_sw.txt        |         12.4 |               0   |            20 |            0 |          0 |      618.4    |           378.5 |          218 |         2346 |        1320.3 |       2295.6  |       2346    |      1.61031 |                501.043 |           0.674316 |     3130.1 |     2939.5 |     2881.6 |      30.8 |      18.8 |      13.2 |
| [qgis310-balanced > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-deployment-sequential/20201014-000413/qgis310-balanced/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)                                                   | somap_grundplanav_sw > av_sw.txt        |         13.4 |               8.1 |            20 |            0 |          0 |      668.35   |           462.5 |          188 |         2251 |        1405.3 |       2209.35 |       2251    |      1.48987 |                463.568 |           0.623883 |     3027.5 |     2848.9 |     2778.1 |      31.1 |      17.3 |      14.4 |
| [qgis310-singlethread-multiinstance > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-deployment-sequential/20201014-000413/qgis310-singlethread-multiinstance/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)               | somap_grundplanav_sw > av_sw.txt        |         14.9 |              20.9 |            20 |            0 |          0 |      747.45   |           535.5 |          199 |         2357 |        1622.4 |       2320.55 |       2357    |      1.33271 |                414.67  |           0.558073 |     3408.2 |     3228.3 |     3159.7 |      30.4 |      15.5 |      12.3 |
| [qgis310-multithread-singleinstance > somap310_lk > lk.txt](../results/details/compare-deployment-sequential/20201014-000413/qgis310-multithread-singleinstance/somap310_lk/lk.txt/dashboard/index.html)                                             | somap_lk > lk.txt                       |          2.4 |               0   |            30 |            0 |          0 |       80.9    |            75   |           49 |          229 |          86.9 |        152    |        229    |     12.1457  |                329.221 |           4.95477  |     2506.7 |     2506.2 |     2505.7 |      22.2 |      15.9 |       9.5 |
| [qgis310-unlimited-threads > somap310_lk > lk.txt](../results/details/compare-deployment-sequential/20201014-000413/qgis310-unlimited-threads/somap310_lk/lk.txt/dashboard/index.html)                                                               | somap_lk > lk.txt                       |          2.5 |               2.7 |            30 |            0 |          0 |       83.1    |            77.5 |           55 |          238 |          89.9 |        158.25 |        238    |     11.8203  |                320.4   |           4.82202  |     2612.5 |     2589.7 |     2544.5 |      30.6 |      20.1 |      10   |
| [qgis310-balanced > somap310_lk > lk.txt](../results/details/compare-deployment-sequential/20201014-000413/qgis310-balanced/somap310_lk/lk.txt/dashboard/index.html)                                                                                 | somap_lk > lk.txt                       |          2.8 |              15.2 |            30 |            0 |          0 |       93.1667 |            90   |           53 |          247 |          95.9 |        166.7  |        247    |     10.5485  |                285.927 |           4.30319  |     2623.4 |     2602.3 |     2575.4 |      27.4 |      17.9 |       9.6 |
| [qgis310-singlethread-multiinstance > somap310_lk > lk.txt](../results/details/compare-deployment-sequential/20201014-000413/qgis310-singlethread-multiinstance/somap310_lk/lk.txt/dashboard/index.html)                                             | somap_lk > lk.txt                       |          3.3 |              34.6 |            30 |            0 |          0 |      108.9    |           103   |           63 |          259 |         119.8 |        182.55 |        259    |      9.04977 |                245.302 |           3.69179  |     2779.3 |     2755.9 |     2705.2 |      25.6 |      16.4 |      13.2 |

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
    parallel-requests: 1
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
        - lk.txt
      somap310_grundplanav_farbig:
        - av_f_big.txt
      somap310_grundplanav_sw:
        - av_sw.txt

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

  qgis310-unlimited-threads:
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
    parallel-requests: 1
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f_big.txt
      somap310_grundplanav_sw:
      - av_sw.txt
      somap310_lk:
      - lk.txt
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
    parallel-requests: 1
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f_big.txt
      somap310_grundplanav_sw:
      - av_sw.txt
      somap310_lk:
      - lk.txt
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
    parallel-requests: 1
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f_big.txt
      somap310_grundplanav_sw:
      - av_sw.txt
      somap310_lk:
      - lk.txt
    template: docker-compose-qgis-3-nginx
  qgis310-unlimited-threads:
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
    parallel-requests: 1
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f_big.txt
      somap310_grundplanav_sw:
      - av_sw.txt
      somap310_lk:
      - lk.txt
    template: docker-compose-qgis-3-nginx

```