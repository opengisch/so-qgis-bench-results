# QGIS Benchmark summary compare-deployment-sequential (20201012-004358)


compare different types of deployment for QGIS server 3.10 using the same settings

_run completed in 00h 28m 52s_
## Summary plot
An interactive summary plot can be found [here](report_compare-deployment-sequential_20201012-004358_plot.html)

## Summary
| name                               | group   |   duration s |   group penalty % |   sampleCount |   errorCount |   memMinMB |   memMaxMB |   memAvgMB |   cpuMin% |   cpuMax% |   cpuAvg% |   errorPct |
|------------------------------------|---------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-unlimited-threads          | Global  |        351.3 |               0   |           785 |            0 |          0 |     3543.7 |    2639.03 |         0 |      35.6 |   18.5667 |          0 |
| qgis310-multithread-singleinstance | Global  |        352.4 |               0.3 |           785 |            0 |          0 |     3126.8 |    2409.9  |         0 |      31.6 |   20      |          0 |
| qgis310-balanced                   | Global  |        425.5 |              21.1 |           785 |            0 |          0 |     3454.1 |    2577.67 |         0 |      31   |   15.8333 |          0 |
| qgis310-singlethread-multiinstance | Global  |        532.8 |              51.7 |           785 |            0 |          0 |     3779.4 |    2840.27 |         0 |      35.5 |   18.3    |          0 |

## Aggregated
| name                                                             | group                    |   duration s |   group penalty % |   sampleCount |   errorCount |   memMinMB |   memMaxMB |   memAvgMB |   cpuMin% |   cpuMax% |   cpuAvg% |   errorPct |
|------------------------------------------------------------------|--------------------------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-unlimited-threads > somap310_grundplanav_farbig          | somap_grundplanav_farbig |        336.4 |               0   |           735 |            0 |          0 |     3543.7 |     2927.3 |         0 |      35.6 |      20.1 |          0 |
| qgis310-multithread-singleinstance > somap310_grundplanav_farbig | somap_grundplanav_farbig |        337.6 |               0.4 |           735 |            0 |          0 |     3126.8 |     2638   |         0 |      31.6 |      19.8 |          0 |
| qgis310-balanced > somap310_grundplanav_farbig                   | somap_grundplanav_farbig |        409.2 |              21.6 |           735 |            0 |          0 |     3454.1 |     2861   |         0 |      31   |      16.5 |          0 |
| qgis310-singlethread-multiinstance > somap310_grundplanav_farbig | somap_grundplanav_farbig |        514.7 |              53   |           735 |            0 |          0 |     3779.4 |     3119.4 |         0 |      33.9 |      13.1 |          0 |
| qgis310-multithread-singleinstance > somap310_grundplanav_sw     | somap_grundplanav_sw     |         12.3 |               0.2 |            20 |            0 |          0 |     2547   |     2356.7 |         0 |      30.2 |      18.5 |          0 |
| qgis310-unlimited-threads > somap310_grundplanav_sw              | somap_grundplanav_sw     |         12.3 |               0   |            20 |            0 |          0 |     2719.9 |     2637.3 |         0 |      26.2 |      18.6 |          0 |
| qgis310-balanced > somap310_grundplanav_sw                       | somap_grundplanav_sw     |         13.4 |               8.8 |            20 |            0 |          0 |     2613   |     2538   |         0 |      29.3 |      17.2 |          0 |
| qgis310-singlethread-multiinstance > somap310_grundplanav_sw     | somap_grundplanav_sw     |         14.7 |              19.7 |            20 |            0 |          0 |     3107.5 |     2918.1 |         0 |      33.7 |      15.4 |          0 |
| qgis310-multithread-singleinstance > somap310_lk                 | somap_lk                 |          2.4 |               0   |            30 |            0 |          0 |     2239.7 |     2235   |         0 |      26.8 |      21.7 |          0 |
| qgis310-unlimited-threads > somap310_lk                          | somap_lk                 |          2.5 |               3.9 |            30 |            0 |          0 |     2361.8 |     2352.5 |         0 |      23.2 |      17   |          0 |
| qgis310-balanced > somap310_lk                                   | somap_lk                 |          2.9 |              18.6 |            30 |            0 |          0 |     2337.8 |     2334   |         0 |      17.5 |      13.8 |          0 |
| qgis310-singlethread-multiinstance > somap310_lk                 | somap_lk                 |          3.4 |              38.5 |            30 |            0 |          0 |     2502.9 |     2483.3 |         0 |      35.5 |      26.4 |          0 |

## Detail
| name                                                                                                                                                                                                                                                 | group                                   |   duration s |   group penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|--------------|-------------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis310-unlimited-threads > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment-sequential/20201012-004358/qgis310-unlimited-threads/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html)                   | somap_grundplanav_farbig > av_f_big.txt |        336.4 |               0   |           735 |            0 |          0 |      457.743  |           386   |          177 |         2800 |         697   |        835.2  |       1608.72 |      2.17764 |                318.686 |           0.9588   |     3543.7 |     2927.3 |     2375.1 |      35.6 |      20.1 |      12.6 |
| [qgis310-multithread-singleinstance > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment-sequential/20201012-004358/qgis310-multithread-singleinstance/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |        337.6 |               0.4 |           735 |            0 |          0 |      459.37   |           403   |          166 |         2768 |         682.4 |        823.6  |       1341.56 |      2.16993 |                317.556 |           0.955406 |     3126.8 |     2638   |     2240.6 |      31.6 |      19.8 |      12.5 |
| [qgis310-balanced > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment-sequential/20201012-004358/qgis310-balanced/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html)                                     | somap_grundplanav_farbig > av_f_big.txt |        409.2 |              21.6 |           735 |            0 |          0 |      556.756  |           525   |          169 |         3039 |         780.4 |        949.2  |       1750.2  |      1.79126 |                262.145 |           0.788678 |     3454.1 |     2861   |     2313.4 |      31   |      16.5 |      12.4 |
| [qgis310-singlethread-multiinstance > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment-sequential/20201012-004358/qgis310-singlethread-multiinstance/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |        514.7 |              53   |           735 |            0 |          0 |      700.301  |           685   |          160 |         3318 |        1021   |       1241.2  |       2743.28 |      1.42502 |                208.548 |           0.627425 |     3779.4 |     3119.4 |     2509.6 |      33.9 |      13.1 |      12.1 |
| [qgis310-multithread-singleinstance > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-deployment-sequential/20201012-004358/qgis310-multithread-singleinstance/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)               | somap_grundplanav_sw > av_sw.txt        |         12.3 |               0.2 |            20 |            0 |          0 |      615.75   |           386   |          208 |         2304 |        1276   |       2253.4  |       2304    |      1.61655 |                502.985 |           0.676932 |     2547   |     2356.7 |     2302.6 |      30.2 |      18.5 |      15.1 |
| [qgis310-unlimited-threads > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-deployment-sequential/20201012-004358/qgis310-unlimited-threads/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)                                 | somap_grundplanav_sw > av_sw.txt        |         12.3 |               0   |            20 |            0 |          0 |      614.7    |           377   |          220 |         2328 |        1345.3 |       2280    |       2328    |      1.61983 |                504.005 |           0.678302 |     2719.9 |     2637.3 |     2618.4 |      26.2 |      18.6 |      15.1 |
| [qgis310-balanced > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-deployment-sequential/20201012-004358/qgis310-balanced/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)                                                   | somap_grundplanav_sw > av_sw.txt        |         13.4 |               8.8 |            20 |            0 |          0 |      669.05   |           447.5 |          205 |         2258 |        1438.1 |       2218    |       2258    |      1.48832 |                463.086 |           0.623233 |     2613   |     2538   |     2501.5 |      29.3 |      17.2 |      14.2 |
| [qgis310-singlethread-multiinstance > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-deployment-sequential/20201012-004358/qgis310-singlethread-multiinstance/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)               | somap_grundplanav_sw > av_sw.txt        |         14.7 |              19.7 |            20 |            0 |          0 |      735.7    |           536.5 |          190 |         2342 |        1590.8 |       2304.6  |       2342    |      1.35428 |                421.381 |           0.567105 |     3107.5 |     2918.1 |     2854.8 |      33.7 |      15.4 |      12.5 |
| [qgis310-multithread-singleinstance > somap310_lk > lk.txt](../results/details/compare-deployment-sequential/20201012-004358/qgis310-multithread-singleinstance/somap310_lk/lk.txt/dashboard/index.html)                                             | somap_lk > lk.txt                       |          2.4 |               0   |            30 |            0 |          0 |       80.7667 |            76.5 |           52 |          236 |          85.3 |        156.25 |        236    |     12.1261  |                328.689 |           4.94676  |     2239.7 |     2235   |     2230.2 |      26.8 |      21.7 |      16.7 |
| [qgis310-unlimited-threads > somap310_lk > lk.txt](../results/details/compare-deployment-sequential/20201012-004358/qgis310-unlimited-threads/somap310_lk/lk.txt/dashboard/index.html)                                                               | somap_lk > lk.txt                       |          2.5 |               3.9 |            30 |            0 |          0 |       83.9333 |            77.5 |           49 |          248 |          94.8 |        168.25 |        248    |     11.6913  |                316.904 |           4.7694   |     2361.8 |     2352.5 |     2343.3 |      23.2 |      17   |      10.7 |
| [qgis310-balanced > somap310_lk > lk.txt](../results/details/compare-deployment-sequential/20201012-004358/qgis310-balanced/somap310_lk/lk.txt/dashboard/index.html)                                                                                 | somap_lk > lk.txt                       |          2.9 |              18.6 |            30 |            0 |          0 |       95.8    |            90.5 |           54 |          250 |         102.8 |        176.85 |        250    |     10.2634  |                278.199 |           4.18689  |     2337.8 |     2334   |     2330.1 |      17.5 |      13.8 |      10   |
| [qgis310-singlethread-multiinstance > somap310_lk > lk.txt](../results/details/compare-deployment-sequential/20201012-004358/qgis310-singlethread-multiinstance/somap310_lk/lk.txt/dashboard/index.html)                                             | somap_lk > lk.txt                       |          3.4 |              38.5 |            30 |            0 |          0 |      111.9    |           106   |           70 |          258 |         128.3 |        193.1  |        258    |      8.81834 |                239.029 |           3.59738  |     2502.9 |     2483.3 |     2445.7 |      35.5 |      26.4 |      17.6 |

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