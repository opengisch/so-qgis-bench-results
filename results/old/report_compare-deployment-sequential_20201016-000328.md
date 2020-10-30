# QGIS Benchmark summary compare-deployment-sequential (20201016-000328)


compare different types of deployment for QGIS server 3.10 using the same settings

_run completed in 00h 28m 53s_
## Summary plot
An interactive summary plot can be found [here](report_compare-deployment-sequential_20201016-000328_plot.html)

## Summary
| name                               | group   |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|------------------------------------|---------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-unlimited-threads          | Global  |        350   |               0   |           785 |            0 |     3837.5 |    2945.53 |     2643.2 |      36.3 |   19.1333 |      10.4 |          0 |
| qgis310-multithread-singleinstance | Global  |        355.4 |               1.5 |           785 |            0 |     3511.2 |    2713.93 |     2526.9 |      31.4 |   18.4    |       9.6 |          0 |
| qgis310-balanced                   | Global  |        424.3 |              21.2 |           785 |            0 |     3698.2 |    2871    |     2565.4 |      31.3 |   16.9333 |       9   |          0 |
| qgis310-singlethread-multiinstance | Global  |        533   |              52.3 |           785 |            0 |     4099.5 |    3146.93 |     2772.2 |      32.5 |   14.6667 |      12.1 |          0 |

## Aggregated
| name                                                             | group                    |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|------------------------------------------------------------------|--------------------------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-unlimited-threads > somap310_grundplanav_farbig          | somap_grundplanav_farbig |        335.3 |               0   |           735 |            0 |     3837.5 |     3238.7 |     2668.8 |      36.3 |      20.1 |      12.2 |          0 |
| qgis310-multithread-singleinstance > somap310_grundplanav_farbig | somap_grundplanav_farbig |        340.5 |               1.5 |           735 |            0 |     3511.2 |     2946.8 |     2547.4 |      31.3 |      19.8 |      12.5 |          0 |
| qgis310-balanced > somap310_grundplanav_farbig                   | somap_grundplanav_farbig |        408.1 |              21.7 |           735 |            0 |     3698.2 |     3145.7 |     2664.8 |      31.3 |      16.5 |      12.6 |          0 |
| qgis310-singlethread-multiinstance > somap310_grundplanav_farbig | somap_grundplanav_farbig |        515.1 |              53.6 |           735 |            0 |     4099.5 |     3420.5 |     2810.6 |      32.5 |      13   |      12.1 |          0 |
| qgis310-unlimited-threads > somap310_grundplanav_sw              | somap_grundplanav_sw     |         12.2 |               0   |            20 |            0 |     3153.3 |     2954.3 |     2907.5 |      29.6 |      18.8 |      15   |          0 |
| qgis310-multithread-singleinstance > somap310_grundplanav_sw     | somap_grundplanav_sw     |         12.4 |               1.6 |            20 |            0 |     2852   |     2666.8 |     2607.1 |      31.4 |      18.9 |      15.1 |          0 |
| qgis310-balanced > somap310_grundplanav_sw                       | somap_grundplanav_sw     |         13.4 |              10.1 |            20 |            0 |     2936.9 |     2853   |     2826.9 |      25.6 |      17.2 |      14.1 |          0 |
| qgis310-singlethread-multiinstance > somap310_grundplanav_sw     | somap_grundplanav_sw     |         14.7 |              20.4 |            20 |            0 |     3431.2 |     3224.7 |     3184.4 |      23.1 |      15.1 |      12.5 |          0 |
| qgis310-multithread-singleinstance > somap310_lk                 | somap_lk                 |          2.5 |               1.2 |            30 |            0 |     2529.6 |     2528.2 |     2526.9 |      23.5 |      16.5 |       9.6 |          0 |
| qgis310-unlimited-threads > somap310_lk                          | somap_lk                 |          2.5 |               0   |            30 |            0 |     2644.1 |     2643.6 |     2643.2 |      25.6 |      18.5 |      10.4 |          0 |
| qgis310-balanced > somap310_lk                                   | somap_lk                 |          2.8 |              13.6 |            30 |            0 |     2632.2 |     2614.3 |     2565.4 |      26.5 |      17.1 |       9   |          0 |
| qgis310-singlethread-multiinstance > somap310_lk                 | somap_lk                 |          3.2 |              31.6 |            30 |            0 |     2814.2 |     2795.6 |     2772.2 |      20.5 |      15.9 |      13.8 |          0 |

## Detail
| name                                                                                                                                                                                                                                                 | group                                   |   duration s |   group penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|--------------|-------------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis310-unlimited-threads > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment-sequential/20201016-000328/qgis310-unlimited-threads/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html)                   | somap_grundplanav_farbig > av_f_big.txt |        335.3 |               0   |           735 |            0 |          0 |      456.257  |           382   |          179 |         2778 |         689   |        847.4  |       1639.12 |      2.18452 |                319.693 |           0.96183  |     3837.5 |     3238.7 |     2668.8 |      36.3 |      20.1 |      12.2 |
| [qgis310-multithread-singleinstance > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment-sequential/20201016-000328/qgis310-multithread-singleinstance/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |        340.5 |               1.5 |           735 |            0 |          0 |      463.244  |           403   |          185 |         2869 |         694.4 |        827.4  |       1273.32 |      2.15211 |                314.956 |           0.947559 |     3511.2 |     2946.8 |     2547.4 |      31.3 |      19.8 |      12.5 |
| [qgis310-balanced > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment-sequential/20201016-000328/qgis310-balanced/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html)                                     | somap_grundplanav_farbig > av_f_big.txt |        408.1 |              21.7 |           735 |            0 |          0 |      555.233  |           521   |          172 |         3024 |         786   |        962.4  |       1706.76 |      1.79635 |                262.892 |           0.79092  |     3698.2 |     3145.7 |     2664.8 |      31.3 |      16.5 |      12.6 |
| [qgis310-singlethread-multiinstance > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment-sequential/20201016-000328/qgis310-singlethread-multiinstance/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |        515.1 |              53.6 |           735 |            0 |          0 |      700.758  |           690   |          167 |         3398 |        1020.8 |       1233.8  |       2813.12 |      1.42402 |                208.398 |           0.626984 |     4099.5 |     3420.5 |     2810.6 |      32.5 |      13   |      12.1 |
| [qgis310-unlimited-threads > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-deployment-sequential/20201016-000328/qgis310-unlimited-threads/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)                                 | somap_grundplanav_sw > av_sw.txt        |         12.2 |               0   |            20 |            0 |          0 |      609.85   |           381   |          195 |         2275 |        1320.7 |       2228.3  |       2275    |      1.63185 |                507.747 |           0.683339 |     3153.3 |     2954.3 |     2907.5 |      29.6 |      18.8 |      15   |
| [qgis310-multithread-singleinstance > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-deployment-sequential/20201016-000328/qgis310-multithread-singleinstance/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)               | somap_grundplanav_sw > av_sw.txt        |         12.4 |               1.6 |            20 |            0 |          0 |      619.65   |           378   |          210 |         2394 |        1305.9 |       2340.75 |       2394    |      1.60578 |                499.633 |           0.672421 |     2852   |     2666.8 |     2607.1 |      31.4 |      18.9 |      15.1 |
| [qgis310-balanced > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-deployment-sequential/20201016-000328/qgis310-balanced/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)                                                   | somap_grundplanav_sw > av_sw.txt        |         13.4 |              10.1 |            20 |            0 |          0 |      671.65   |           481.5 |          208 |         2414 |        1345.4 |       2360.95 |       2414    |      1.48225 |                461.197 |           0.620692 |     2936.9 |     2853   |     2826.9 |      25.6 |      17.2 |      14.1 |
| [qgis310-singlethread-multiinstance > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-deployment-sequential/20201016-000328/qgis310-singlethread-multiinstance/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)               | somap_grundplanav_sw > av_sw.txt        |         14.7 |              20.4 |            20 |            0 |          0 |      734.3    |           541   |          207 |         2203 |        1590.7 |       2172.7  |       2203    |      1.35685 |                422.181 |           0.568182 |     3431.2 |     3224.7 |     3184.4 |      23.1 |      15.1 |      12.5 |
| [qgis310-multithread-singleinstance > somap310_lk > lk.txt](../results/details/compare-deployment-sequential/20201016-000328/qgis310-multithread-singleinstance/somap310_lk/lk.txt/dashboard/index.html)                                             | somap_lk > lk.txt                       |          2.5 |               1.2 |            30 |            0 |          0 |       82.9333 |            78.5 |           55 |          227 |          88.9 |        152.75 |        227    |     11.8343  |                320.779 |           4.82772  |     2529.6 |     2528.2 |     2526.9 |      23.5 |      16.5 |       9.6 |
| [qgis310-unlimited-threads > somap310_lk > lk.txt](../results/details/compare-deployment-sequential/20201016-000328/qgis310-unlimited-threads/somap310_lk/lk.txt/dashboard/index.html)                                                               | somap_lk > lk.txt                       |          2.5 |               0   |            30 |            0 |          0 |       81.9667 |            77   |           53 |          226 |          89   |        152.85 |        226    |     11.9952  |                325.14  |           4.89336  |     2644.1 |     2643.6 |     2643.2 |      25.6 |      18.5 |      10.4 |
| [qgis310-balanced > somap310_lk > lk.txt](../results/details/compare-deployment-sequential/20201016-000328/qgis310-balanced/somap310_lk/lk.txt/dashboard/index.html)                                                                                 | somap_lk > lk.txt                       |          2.8 |              13.6 |            30 |            0 |          0 |       93.1333 |            89.5 |           54 |          246 |         104.3 |        172.85 |        246    |     10.5522  |                286.027 |           4.30471  |     2632.2 |     2614.3 |     2565.4 |      26.5 |      17.1 |       9   |
| [qgis310-singlethread-multiinstance > somap310_lk > lk.txt](../results/details/compare-deployment-sequential/20201016-000328/qgis310-singlethread-multiinstance/somap310_lk/lk.txt/dashboard/index.html)                                             | somap_lk > lk.txt                       |          3.2 |              31.6 |            30 |            0 |          0 |      107.9    |           103.5 |           61 |          263 |         117.7 |        187.1  |        263    |      9.1352  |                247.617 |           3.72664  |     2814.2 |     2795.6 |     2772.2 |      20.5 |      15.9 |      13.8 |

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