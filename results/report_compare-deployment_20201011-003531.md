# QGIS Benchmark summary compare-deployment (20201011-003531)


compare different types of deployment for QGIS server 3.10 using the same settings

_run completed in 7323.15s_

## Summary
| name                               | group   |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   cpuMax% |   cpuAvg% |   errorPct |
|------------------------------------|---------|--------------|-------------------|---------------|--------------|------------|------------|-----------|-----------|------------|
| qgis310-singlethread-multiinstance | Global  |      9515.35 |              0    |         11187 |            0 |     9706.9 |    5037.23 |      96.2 |   74      |          0 |
| qgis310-unlimited-threads          | Global  |     15498.1  |             62.87 |         11187 |            0 |     8588.1 |    4385.1  |      77.4 |   47.6667 |          0 |
| qgis310-balanced                   | Global  |     16732.2  |             75.84 |         11187 |            0 |     8651.2 |    4222.63 |      74   |   44.0667 |          0 |
| qgis310-multithread-singleinstance | Global  |     44881.4  |            371.67 |         11187 |            0 |     7764.9 |    3853.8  |      43.6 |   15.5667 |          0 |

## Aggregated
| name                                                             | group                    |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   cpuMax% |   cpuAvg% |   errorPct |
|------------------------------------------------------------------|--------------------------|--------------|-------------------|---------------|--------------|------------|------------|-----------|-----------|------------|
| qgis310-singlethread-multiinstance > somap310_grundplanav_farbig | somap_grundplanav_farbig |       913.16 |              0    |           735 |            0 |     4923.9 |     4193.1 |      96.2 |      73.6 |          0 |
| qgis310-unlimited-threads > somap310_grundplanav_farbig          | somap_grundplanav_farbig |      1363.6  |             49.33 |           735 |            0 |     4009.9 |     3323.5 |      76.9 |      52.2 |          0 |
| qgis310-balanced > somap310_grundplanav_farbig                   | somap_grundplanav_farbig |      1515.63 |             65.98 |           735 |            0 |     3704.7 |     3161.3 |      74   |      46.4 |          0 |
| qgis310-multithread-singleinstance > somap310_grundplanav_farbig | somap_grundplanav_farbig |      3701.63 |            305.36 |           735 |            0 |     3084.7 |     2719.2 |      39.8 |      16.1 |          0 |
| qgis310-singlethread-multiinstance > somap310_grundplanav_sw     | somap_grundplanav_sw     |      6341.69 |              0    |          5190 |            0 |     9706.9 |     7412.6 |      93.4 |      74   |          0 |
| qgis310-unlimited-threads > somap310_grundplanav_sw              | somap_grundplanav_sw     |     10435    |             64.55 |          5190 |            0 |     8588.1 |     6525.8 |      77.4 |      45.2 |          0 |
| qgis310-balanced > somap310_grundplanav_sw                       | somap_grundplanav_sw     |     11266.6  |             77.66 |          5190 |            0 |     8651.2 |     6375.1 |      71.2 |      43.1 |          0 |
| qgis310-multithread-singleinstance > somap310_grundplanav_sw     | somap_grundplanav_sw     |     30239.6  |            376.84 |          5190 |            0 |     7764.9 |     5984.7 |      37.7 |      14.7 |          0 |
| qgis310-singlethread-multiinstance > somap310_lk                 | somap_lk                 |      2260.5  |              0    |          5262 |            0 |     5507.3 |     3506   |      95.6 |      74.4 |          0 |
| qgis310-unlimited-threads > somap310_lk                          | somap_lk                 |      3699.49 |             63.66 |          5262 |            0 |     4476.5 |     3306   |      69.7 |      45.6 |          0 |
| qgis310-balanced > somap310_lk                                   | somap_lk                 |      3949.91 |             74.74 |          5262 |            0 |     4488.2 |     3131.5 |      58.1 |      42.7 |          0 |
| qgis310-multithread-singleinstance > somap310_lk                 | somap_lk                 |     10940.2  |            383.97 |          5262 |            0 |     4317.3 |     2857.5 |      43.6 |      15.9 |          0 |

## Detail
| name                                                                                                                                                                                                                                      | group                                   |   duration s |   group penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|--------------|-------------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis310-singlethread-multiinstance > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment/20201011-003531/qgis310-singlethread-multiinstance/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |       913.16 |              0    |           735 |            0 |          0 |      1242.39  |          1152   |          397 |         3893 |        1858.8 |       2273.2  |       3261.72 |      9.52282 |               1393.63  |           4.19283  |     4923.9 |     4193.1 |     2599.6 |      96.2 |      73.6 |      26.2 |
| [qgis310-unlimited-threads > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment/20201011-003531/qgis310-unlimited-threads/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html)                   | somap_grundplanav_farbig > av_f_big.txt |      1363.6  |             49.33 |           735 |            0 |          0 |      1855.24  |          1845   |          761 |         4423 |        2501.8 |       2846.2  |       3801.8  |      6.40607 |                937.494 |           2.82055  |     4009.9 |     3323.5 |     2572.7 |      76.9 |      52.2 |      26.5 |
| [qgis310-balanced > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment/20201011-003531/qgis310-balanced/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html)                                     | somap_grundplanav_farbig > av_f_big.txt |      1515.63 |             65.98 |           735 |            0 |          0 |      2062.08  |          2019   |          833 |         4661 |        2833   |       3082    |       4315.32 |      5.75608 |                842.384 |           2.53436  |     3704.7 |     3161.3 |     2331.1 |      74   |      46.4 |      25.4 |
| [qgis310-multithread-singleinstance > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment/20201011-003531/qgis310-multithread-singleinstance/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |      3701.63 |            305.36 |           735 |            0 |          0 |      5036.23  |          5112   |         2338 |         8325 |        6497.4 |       7322    |       7808.2  |      2.36486 |                346.086 |           1.04123  |     3084.7 |     2719.2 |     1998.5 |      39.8 |      16.1 |      12.5 |
| [qgis310-singlethread-multiinstance > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-deployment/20201011-003531/qgis310-singlethread-multiinstance/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw_big.txt    |      6341.69 |              0    |          5190 |            0 |          0 |      1221.91  |          1094   |          218 |         9789 |        2095.9 |       2512.45 |       3455.13 |      9.76566 |               2643.05  |           4.25322  |     9706.9 |     7412.6 |     3866.3 |      93.4 |      74   |      12.8 |
| [qgis310-unlimited-threads > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-deployment/20201011-003531/qgis310-unlimited-threads/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)                         | somap_grundplanav_sw > av_sw_big.txt    |     10435    |             64.55 |          5190 |            0 |          0 |      2010.6   |          1884.5 |          558 |         9509 |        3117.8 |       3613.95 |       5143.99 |      5.94786 |               1609.78  |           2.59046  |     8588.1 |     6525.8 |     2931   |      77.4 |      45.2 |      26.7 |
| [qgis310-balanced > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-deployment/20201011-003531/qgis310-balanced/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)                                           | somap_grundplanav_sw > av_sw_big.txt    |     11266.6  |             77.66 |          5190 |            0 |          0 |      2170.84  |          2055.5 |          735 |         8186 |        3410.9 |       3845.9  |       5519.8  |      5.51185 |               1491.74  |           2.40057  |     8651.2 |     6375.1 |     2711.6 |      71.2 |      43.1 |      22.9 |
| [qgis310-multithread-singleinstance > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-deployment/20201011-003531/qgis310-multithread-singleinstance/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw_big.txt    |     30239.6  |            376.84 |          5190 |            0 |          0 |      5826.52  |          5695   |         2129 |        22552 |        8285.4 |       9450.9  |      13027.2  |      2.05652 |                556.585 |           0.895671 |     7764.9 |     5984.7 |     2486.6 |      37.7 |      14.7 |      12.4 |
| [qgis310-singlethread-multiinstance > somap310_lk > lk_big.txt](../results/details/compare-deployment/20201011-003531/qgis310-singlethread-multiinstance/somap310_lk/lk_big.txt/dashboard/index.html)                                     | somap_lk > lk_big.txt                   |      2260.5  |              0    |          5262 |            0 |          0 |       429.59  |           256   |           31 |         3592 |        1016.4 |       1296.85 |       2108.18 |     27.5874  |               1305.81  |          13.9745   |     5507.3 |     3506   |     2246.7 |      95.6 |      74.4 |      13   |
| [qgis310-unlimited-threads > somap310_lk > lk_big.txt](../results/details/compare-deployment/20201011-003531/qgis310-unlimited-threads/somap310_lk/lk_big.txt/dashboard/index.html)                                                       | somap_lk > lk_big.txt                   |      3699.49 |             63.66 |          5262 |            0 |          0 |       703.058 |           540   |           36 |         4702 |        1489.4 |       1849    |       2901.33 |     16.9343  |                801.546 |           8.57811  |     4476.5 |     3306   |     2206.4 |      69.7 |      45.6 |      11.4 |
| [qgis310-balanced > somap310_lk > lk_big.txt](../results/details/compare-deployment/20201011-003531/qgis310-balanced/somap310_lk/lk_big.txt/dashboard/index.html)                                                                         | somap_lk > lk_big.txt                   |      3949.91 |             74.74 |          5262 |            0 |          0 |       750.648 |           565   |           38 |         4970 |        1608.7 |       2049.7  |       3213.77 |     15.8531  |                750.389 |           8.03043  |     4488.2 |     3131.5 |     2128.3 |      58.1 |      42.7 |      10.1 |
| [qgis310-multithread-singleinstance > somap310_lk > lk_big.txt](../results/details/compare-deployment/20201011-003531/qgis310-multithread-singleinstance/somap310_lk/lk_big.txt/dashboard/index.html)                                     | somap_lk > lk_big.txt                   |     10940.2  |            383.97 |          5262 |            0 |          0 |      2079.09  |          1543   |          171 |        12631 |        4081.8 |       5025.85 |       7794    |      5.7325  |                271.349 |           2.90382  |     4317.3 |     2857.5 |     1958.9 |      43.6 |      15.9 |       9.9 |

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