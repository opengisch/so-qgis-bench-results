# QGIS Benchmark summary compare-deployment (20201014-003431)


compare different types of deployment for QGIS server 3.10 using the same settings

_run completed in 02h 01m 34s_
## Summary plot
An interactive summary plot can be found [here](report_compare-deployment_20201014-003431_plot.html)

## Summary
| name                               | group   |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|------------------------------------|---------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-singlethread-multiinstance | Global  |       9419.1 |               0   |         11187 |            0 |     8748.5 |    5251.4  |     2832   |      99.1 |   74.1667 |      13.7 |          0 |
| qgis310-balanced-unlimited-threads | Global  |      15470.3 |              64.2 |         11187 |            0 |     8223.5 |    4688.37 |     2664.3 |      77.8 |   47.8333 |      11.4 |          0 |
| qgis310-balanced                   | Global  |      16435.7 |              74.5 |         11187 |            0 |     7983.5 |    4506.67 |     2595.7 |      81.6 |   43.9    |      10   |          0 |
| qgis310-multithread-singleinstance | Global  |      44957.4 |             377.3 |         11187 |            0 |     7429.7 |    4079.07 |     2487.7 |      37.2 |   16.2    |       9.9 |          0 |

## Aggregated
| name                                                             | group                    |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|------------------------------------------------------------------|--------------------------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-singlethread-multiinstance > somap310_grundplanav_farbig | somap_grundplanav_farbig |        922.7 |               0   |           735 |            0 |     5544   |     4585.5 |     3138.1 |      99.1 |      74   |      29.3 |          0 |
| qgis310-balanced-unlimited-threads > somap310_grundplanav_farbig | somap_grundplanav_farbig |       1348.1 |              46.1 |           735 |            0 |     4418.2 |     3817.3 |     2972.7 |      77.8 |      52.1 |      25.9 |          0 |
| qgis310-balanced > somap310_grundplanav_farbig                   | somap_grundplanav_farbig |       1501.9 |              62.8 |           735 |            0 |     4153   |     3617.4 |     2828   |      75.4 |      46.2 |      26.6 |          0 |
| qgis310-multithread-singleinstance > somap310_grundplanav_farbig | somap_grundplanav_farbig |       3782   |             309.9 |           735 |            0 |     3530.6 |     3099.6 |     2584.7 |      37.2 |      17.6 |      12.5 |          0 |
| qgis310-singlethread-multiinstance > somap310_grundplanav_sw     | somap_grundplanav_sw     |       6261   |               0   |          5190 |            0 |     8748.5 |     7191.6 |     4203.5 |      99   |      74.2 |      25.8 |          0 |
| qgis310-balanced-unlimited-threads > somap310_grundplanav_sw     | somap_grundplanav_sw     |      10414.8 |              66.3 |          5190 |            0 |     8223.5 |     6500.7 |     3412.1 |      65.4 |      45.9 |      13   |          0 |
| qgis310-balanced > somap310_grundplanav_sw                       | somap_grundplanav_sw     |      11004.8 |              75.8 |          5190 |            0 |     7983.5 |     6302.3 |     3220.9 |      81.6 |      42.8 |      25.8 |          0 |
| qgis310-multithread-singleinstance > somap310_grundplanav_sw     | somap_grundplanav_sw     |      30308.9 |             384.1 |          5190 |            0 |     7429.7 |     5817.7 |     2788.4 |      33.5 |      15.1 |      12.4 |          0 |
| qgis310-singlethread-multiinstance > somap310_lk                 | somap_lk                 |       2235.4 |               0   |          5262 |            0 |     5629.6 |     3977.1 |     2832   |      90.1 |      74.3 |      13.7 |          0 |
| qgis310-balanced-unlimited-threads > somap310_lk                 | somap_lk                 |       3707.5 |              65.9 |          5262 |            0 |     4877.6 |     3747.1 |     2664.3 |      62.1 |      45.5 |      11.4 |          0 |
| qgis310-balanced > somap310_lk                                   | somap_lk                 |       3929   |              75.8 |          5262 |            0 |     4900.1 |     3600.3 |     2595.7 |      64.4 |      42.7 |      10   |          0 |
| qgis310-multithread-singleinstance > somap310_lk                 | somap_lk                 |      10866.5 |             386.1 |          5262 |            0 |     4303.1 |     3319.9 |     2487.7 |      31.7 |      15.9 |       9.9 |          0 |

## Detail
| name                                                                                                                                                                                                                                      | group                                   |   duration s |   group penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|--------------|-------------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis310-singlethread-multiinstance > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment/20201014-003431/qgis310-singlethread-multiinstance/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |        922.7 |               0   |           735 |            0 |          0 |      1255.32  |          1183   |          411 |         4486 |        1856.8 |       2115.6  |       3309.48 |      9.4416  |               1381.75  |           4.15707  |     5544   |     4585.5 |     3138.1 |      99.1 |      74   |      29.3 |
| [qgis310-balanced-unlimited-threads > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment/20201014-003431/qgis310-balanced-unlimited-threads/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |       1348.1 |              46.1 |           735 |            0 |          0 |      1834.18  |          1846   |          574 |         4496 |        2488.8 |       2753.6  |       3867.28 |      6.47811 |                948.033 |           2.85227  |     4418.2 |     3817.3 |     2972.7 |      77.8 |      52.1 |      25.9 |
| [qgis310-balanced > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment/20201014-003431/qgis310-balanced/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html)                                     | somap_grundplanav_farbig > av_f_big.txt |       1501.9 |              62.8 |           735 |            0 |          0 |      2043.39  |          2080   |          538 |         5204 |        2725.6 |       3004.4  |       4106.68 |      5.79946 |                848.733 |           2.55346  |     4153   |     3617.4 |     2828   |      75.4 |      46.2 |      26.6 |
| [qgis310-multithread-singleinstance > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment/20201014-003431/qgis310-multithread-singleinstance/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |       3782   |             309.9 |           735 |            0 |          0 |      5145.64  |          5315   |         2452 |         8511 |        6444.4 |       7396.4  |       7981.04 |      2.3142  |                338.676 |           1.01892  |     3530.6 |     3099.6 |     2584.7 |      37.2 |      17.6 |      12.5 |
| [qgis310-singlethread-multiinstance > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-deployment/20201014-003431/qgis310-singlethread-multiinstance/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw_big.txt    |       6261   |               0   |          5190 |            0 |          0 |      1206.36  |          1086   |          207 |         6661 |        2077.9 |       2470    |       3555.09 |      9.89091 |               2676.92  |           4.30777  |     8748.5 |     7191.6 |     4203.5 |      99   |      74.2 |      25.8 |
| [qgis310-balanced-unlimited-threads > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-deployment/20201014-003431/qgis310-balanced-unlimited-threads/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw_big.txt    |      10414.8 |              66.3 |          5190 |            0 |          0 |      2006.7   |          1879   |          613 |        10780 |        3151.9 |       3635.35 |       5103.9  |      5.95707 |               1612.26  |           2.59447  |     8223.5 |     6500.7 |     3412.1 |      65.4 |      45.9 |      13   |
| [qgis310-balanced > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-deployment/20201014-003431/qgis310-balanced/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)                                           | somap_grundplanav_sw > av_sw_big.txt    |      11004.8 |              75.8 |          5190 |            0 |          0 |      2120.39  |          1993   |          585 |         8275 |        3302   |       3784    |       5643.34 |      5.64072 |               1526.62  |           2.45669  |     7983.5 |     6302.3 |     3220.9 |      81.6 |      42.8 |      25.8 |
| [qgis310-multithread-singleinstance > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-deployment/20201014-003431/qgis310-multithread-singleinstance/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw_big.txt    |      30308.9 |             384.1 |          5190 |            0 |          0 |      5839.87  |          5717.5 |         2095 |        22934 |        8338.5 |       9488.55 |      12880.6  |      2.05172 |                555.285 |           0.893583 |     7429.7 |     5817.7 |     2788.4 |      33.5 |      15.1 |      12.4 |
| [qgis310-singlethread-multiinstance > somap310_lk > lk_big.txt](../results/details/compare-deployment/20201014-003431/qgis310-singlethread-multiinstance/somap310_lk/lk_big.txt/dashboard/index.html)                                     | somap_lk > lk_big.txt                   |       2235.4 |               0   |          5262 |            0 |          0 |       424.825 |           256   |           32 |         3137 |        1028   |       1311.4  |       2140    |     27.9074  |               1321.02  |          14.1366   |     5629.6 |     3977.1 |     2832   |      90.1 |      74.3 |      13.7 |
| [qgis310-balanced-unlimited-threads > somap310_lk > lk_big.txt](../results/details/compare-deployment/20201014-003431/qgis310-balanced-unlimited-threads/somap310_lk/lk_big.txt/dashboard/index.html)                                     | somap_lk > lk_big.txt                   |       3707.5 |              65.9 |          5262 |            0 |          0 |       704.572 |           537.5 |           37 |         5005 |        1487   |       1873.55 |       2828.17 |     16.8974  |                799.788 |           8.55946  |     4877.6 |     3747.1 |     2664.3 |      62.1 |      45.5 |      11.4 |
| [qgis310-balanced > somap310_lk > lk_big.txt](../results/details/compare-deployment/20201014-003431/qgis310-balanced/somap310_lk/lk_big.txt/dashboard/index.html)                                                                         | somap_lk > lk_big.txt                   |       3929   |              75.8 |          5262 |            0 |          0 |       746.668 |           575   |           61 |         5040 |        1609   |       1999.85 |       3043.22 |     15.9271  |                753.912 |           8.06794  |     4900.1 |     3600.3 |     2595.7 |      64.4 |      42.7 |      10   |
| [qgis310-multithread-singleinstance > somap310_lk > lk_big.txt](../results/details/compare-deployment/20201014-003431/qgis310-multithread-singleinstance/somap310_lk/lk_big.txt/dashboard/index.html)                                     | somap_lk > lk_big.txt                   |      10866.5 |             386.1 |          5262 |            0 |          0 |      2065.08  |          1535.5 |          139 |        12492 |        4053.4 |       4954.4  |       7620.5  |      5.77118 |                273.178 |           2.92341  |     4303.1 |     3319.9 |     2487.7 |      31.7 |      15.9 |       9.9 |

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