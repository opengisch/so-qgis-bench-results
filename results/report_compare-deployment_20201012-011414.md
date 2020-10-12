# QGIS Benchmark summary compare-deployment (20201012-011414)


compare different types of deployment for QGIS server 3.10 using the same settings

_run completed in 02h 01m 20s_
## Summary plot
An interactive summary plot can be found [here](report_compare-deployment_20201012-011414_plot.html)

## Summary
| name                               | group   |   duration s |   group penalty % |   sampleCount |   errorCount |   memMinMB |   memMaxMB |   memAvgMB |   cpuMin% |   cpuMax% |   cpuAvg% |   errorPct |
|------------------------------------|---------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-singlethread-multiinstance | Global  |       9359.3 |               0   |         11187 |            0 |          0 |     9543.3 |    5123.27 |         0 |      95.4 |   73.9    |          0 |
| qgis310-unlimited-threads          | Global  |      15316.8 |              63.7 |         11187 |            0 |          0 |     8716.1 |    4740.63 |         0 |      81.3 |   45.4667 |          0 |
| qgis310-balanced                   | Global  |      16310.9 |              74.3 |         11187 |            0 |          0 |     8424.2 |    4436.6  |         0 |      76.9 |   43.6667 |          0 |
| qgis310-multithread-singleinstance | Global  |      45120   |             382.1 |         11187 |            0 |          0 |     7686.7 |    3936.13 |         0 |      42.8 |   16.2333 |          0 |

## Aggregated
| name                                                             | group                    |   duration s |   group penalty % |   sampleCount |   errorCount |   memMinMB |   memMaxMB |   memAvgMB |   cpuMin% |   cpuMax% |   cpuAvg% |   errorPct |
|------------------------------------------------------------------|--------------------------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-singlethread-multiinstance > somap310_grundplanav_farbig | somap_grundplanav_farbig |        913.3 |               0   |           735 |            0 |          0 |     4960.5 |     4312.4 |         0 |      95.4 |      73.9 |          0 |
| qgis310-unlimited-threads > somap310_grundplanav_farbig          | somap_grundplanav_farbig |       1288.3 |              41.1 |           735 |            0 |          0 |     4264.5 |     3797.3 |         0 |      72.1 |      47.7 |          0 |
| qgis310-balanced > somap310_grundplanav_farbig                   | somap_grundplanav_farbig |       1474   |              61.4 |           735 |            0 |          0 |     4158.6 |     3444.6 |         0 |      76.9 |      45.8 |          0 |
| qgis310-multithread-singleinstance > somap310_grundplanav_farbig | somap_grundplanav_farbig |       3809.8 |             317.1 |           735 |            0 |          0 |     3285.5 |     2817.1 |         0 |      42.8 |      17.6 |          0 |
| qgis310-singlethread-multiinstance > somap310_grundplanav_sw     | somap_grundplanav_sw     |       6228.1 |               0   |          5190 |            0 |          0 |     9543.3 |     7370.2 |         0 |      94.1 |      74   |          0 |
| qgis310-unlimited-threads > somap310_grundplanav_sw              | somap_grundplanav_sw     |      10333   |              65.9 |          5190 |            0 |          0 |     8716.1 |     6937.5 |         0 |      81.3 |      43.1 |          0 |
| qgis310-balanced > somap310_grundplanav_sw                       | somap_grundplanav_sw     |      10897.9 |              75   |          5190 |            0 |          0 |     8424.2 |     6524   |         0 |      67.7 |      42.6 |          0 |
| qgis310-multithread-singleinstance > somap310_grundplanav_sw     | somap_grundplanav_sw     |      30431.1 |             388.6 |          5190 |            0 |          0 |     7686.7 |     5935.8 |         0 |      39.1 |      15.2 |          0 |
| qgis310-singlethread-multiinstance > somap310_lk                 | somap_lk                 |       2217.8 |               0   |          5262 |            0 |          0 |     5295.8 |     3687.2 |         0 |      89.2 |      73.8 |          0 |
| qgis310-unlimited-threads > somap310_lk                          | somap_lk                 |       3695.5 |              66.6 |          5262 |            0 |          0 |     4435.6 |     3487.1 |         0 |      67.2 |      45.6 |          0 |
| qgis310-balanced > somap310_lk                                   | somap_lk                 |       3939.1 |              77.6 |          5262 |            0 |          0 |     4644   |     3341.2 |         0 |      61.3 |      42.6 |          0 |
| qgis310-multithread-singleinstance > somap310_lk                 | somap_lk                 |      10879.1 |             390.5 |          5262 |            0 |          0 |     4504.4 |     3055.5 |         0 |      32.6 |      15.9 |          0 |

## Detail
| name                                                                                                                                                                                                                                      | group                                   |   duration s |   group penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|--------------|-------------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis310-singlethread-multiinstance > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment/20201012-011414/qgis310-singlethread-multiinstance/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |        913.3 |               0   |           735 |            0 |          0 |      1242.6   |          1179   |          357 |         3603 |        1847.2 |       2070.6  |       3330.72 |      9.54483 |               1396.85  |            4.20252 |     4960.5 |     4312.4 |     2833.5 |      95.4 |      73.9 |      28.9 |
| [qgis310-unlimited-threads > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment/20201012-011414/qgis310-unlimited-threads/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html)                   | somap_grundplanav_farbig > av_f_big.txt |       1288.3 |              41.1 |           735 |            0 |          0 |      1752.74  |          1720   |          696 |         4395 |        2367.2 |       2678.4  |       4031.76 |      6.74727 |                987.436 |            2.97077 |     4264.5 |     3797.3 |     2687.1 |      72.1 |      47.7 |      22.7 |
| [qgis310-balanced > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment/20201012-011414/qgis310-balanced/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html)                                     | somap_grundplanav_farbig > av_f_big.txt |       1474   |              61.4 |           735 |            0 |          0 |      2005.43  |          1986   |          793 |         5301 |        2710.6 |       2955.2  |       4190.6  |      5.92627 |                867.286 |            2.6093  |     4158.6 |     3444.6 |     2560.4 |      76.9 |      45.8 |      27.3 |
| [qgis310-multithread-singleinstance > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment/20201012-011414/qgis310-multithread-singleinstance/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |       3809.8 |             317.1 |           735 |            0 |          0 |      5183.4   |          5359   |         2364 |         8363 |        6584.6 |       7520.6  |       8032.56 |      2.29801 |                336.304 |            1.0118  |     3285.5 |     2817.1 |     2328.4 |      42.8 |      17.6 |      12.6 |
| [qgis310-singlethread-multiinstance > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-deployment/20201012-011414/qgis310-singlethread-multiinstance/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw_big.txt    |       6228.1 |               0   |          5190 |            0 |          0 |      1200.03  |          1073   |          219 |         6342 |        2070.9 |       2491.9  |       3562.59 |      9.93794 |               2689.67  |            4.32825 |     9543.3 |     7370.2 |     3891.4 |      94.1 |      74   |      12.7 |
| [qgis310-unlimited-threads > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-deployment/20201012-011414/qgis310-unlimited-threads/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)                         | somap_grundplanav_sw > av_sw_big.txt    |      10333   |              65.9 |          5190 |            0 |          0 |      1990.95  |          1853   |          558 |        10820 |        3111.9 |       3611.8  |       5059.71 |      6.00773 |               1625.9   |            2.61654 |     8716.1 |     6937.5 |     3635.8 |      81.3 |      43.1 |      25.3 |
| [qgis310-balanced > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-deployment/20201012-011414/qgis310-balanced/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)                                           | somap_grundplanav_sw > av_sw_big.txt    |      10897.9 |              75   |          5190 |            0 |          0 |      2099.78  |          1960   |          702 |        10931 |        3257.7 |       3765.45 |       5297.54 |      5.69724 |               1541.9   |            2.48131 |     8424.2 |     6524   |     3089.6 |      67.7 |      42.6 |      18.5 |
| [qgis310-multithread-singleinstance > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-deployment/20201012-011414/qgis310-multithread-singleinstance/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw_big.txt    |      30431.1 |             388.6 |          5190 |            0 |          0 |      5863.4   |          5731   |         2169 |        22604 |        8341.9 |       9536.45 |      13170.6  |      2.04354 |                553.075 |            0.89002 |     7686.7 |     5935.8 |     2523.5 |      39.1 |      15.2 |      12.5 |
| [qgis310-singlethread-multiinstance > somap310_lk > lk_big.txt](../results/details/compare-deployment/20201012-011414/qgis310-singlethread-multiinstance/somap310_lk/lk_big.txt/dashboard/index.html)                                     | somap_lk > lk_big.txt                   |       2217.8 |               0   |          5262 |            0 |          0 |       421.483 |           249   |           31 |         4469 |        1018   |       1308.85 |       2129.37 |     27.9678  |               1323.86  |           14.1672  |     5295.8 |     3687.2 |     2473.4 |      89.2 |      73.8 |      13.2 |
| [qgis310-unlimited-threads > somap310_lk > lk_big.txt](../results/details/compare-deployment/20201012-011414/qgis310-unlimited-threads/somap310_lk/lk_big.txt/dashboard/index.html)                                                       | somap_lk > lk_big.txt                   |       3695.5 |              66.6 |          5262 |            0 |          0 |       702.308 |           535.5 |           68 |         4924 |        1483   |       1861    |       2937.37 |     16.9454  |                802.103 |            8.58375 |     4435.6 |     3487.1 |     2406.8 |      67.2 |      45.6 |      11.3 |
| [qgis310-balanced > somap310_lk > lk_big.txt](../results/details/compare-deployment/20201012-011414/qgis310-balanced/somap310_lk/lk_big.txt/dashboard/index.html)                                                                         | somap_lk > lk_big.txt                   |       3939.1 |              77.6 |          5262 |            0 |          0 |       748.588 |           569   |           37 |         5128 |        1600   |       1967.7  |       3143.59 |     15.8761  |                751.498 |            8.04211 |     4644   |     3341.2 |     2330.7 |      61.3 |      42.6 |      10.4 |
| [qgis310-multithread-singleinstance > somap310_lk > lk_big.txt](../results/details/compare-deployment/20201012-011414/qgis310-multithread-singleinstance/somap310_lk/lk_big.txt/dashboard/index.html)                                     | somap_lk > lk_big.txt                   |      10879.1 |             390.5 |          5262 |            0 |          0 |      2067.48  |          1527   |          129 |        12528 |        4029.7 |       4991.95 |       7760.85 |      5.76581 |                272.924 |            2.92069 |     4504.4 |     3055.5 |     2202.8 |      32.6 |      15.9 |      10.2 |

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