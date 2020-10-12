# QGIS Benchmark summary compare-deployment-sequential (20201012-102750)


compare different types of deployment for QGIS server 3.10 using the same settings

_run completed in 00h 29m 53s_
## Summary plot
An interactive summary plot can be found [here](report_compare-deployment-sequential_20201012-102750_plot.html)

## Summary
| name                               | group   |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|------------------------------------|---------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-multithread-singleinstance | Global  |        366   |               0   |           785 |            0 |     3161.2 |    2461.63 |     2251   |      30.1 |   18.2333 |       9.4 |          0 |
| qgis310-unlimited-threads          | Global  |        366.5 |               0.1 |           785 |            0 |     3557   |    2675.93 |     2380.3 |      35   |   18      |      10.7 |          0 |
| qgis310-balanced                   | Global  |        440.7 |              20.4 |           785 |            0 |     3480.2 |    2611.77 |     2359.5 |      28.8 |   16.5667 |      10.1 |          0 |
| qgis310-singlethread-multiinstance | Global  |        547.2 |              49.5 |           785 |            0 |     3820.5 |    2867.27 |     2502.1 |      30.6 |   13.9333 |       1.2 |          0 |

## Aggregated
| name                                                             | group                    |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|------------------------------------------------------------------|--------------------------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-multithread-singleinstance > somap310_grundplanav_farbig | somap_grundplanav_farbig |        350.8 |               0   |           735 |            0 |     3161.2 |     2687.5 |     2251   |      30.1 |      19.6 |      12.4 |          0 |
| qgis310-unlimited-threads > somap310_grundplanav_farbig          | somap_grundplanav_farbig |        351   |               0.1 |           735 |            0 |     3557   |     2946.4 |     2401   |      35   |      20   |      12.3 |          0 |
| qgis310-balanced > somap310_grundplanav_farbig                   | somap_grundplanav_farbig |        423.9 |              20.8 |           735 |            0 |     3480.2 |     2883.5 |     2410.2 |      28.8 |      16.4 |      12.5 |          0 |
| qgis310-singlethread-multiinstance > somap310_grundplanav_farbig | somap_grundplanav_farbig |        528.3 |              50.6 |           735 |            0 |     3820.5 |     3153.1 |     2509.1 |      30.6 |      13   |      11.9 |          0 |
| qgis310-multithread-singleinstance > somap310_grundplanav_sw     | somap_grundplanav_sw     |         12.7 |               0   |            20 |            0 |     2600.5 |     2428.6 |     2353.9 |      28.2 |      18.7 |      15.5 |          0 |
| qgis310-unlimited-threads > somap310_grundplanav_sw              | somap_grundplanav_sw     |         12.9 |               1.4 |            20 |            0 |     2888.1 |     2699.2 |     2647.4 |      31.1 |      18.6 |      13   |          0 |
| qgis310-balanced > somap310_grundplanav_sw                       | somap_grundplanav_sw     |         14   |               9.8 |            20 |            0 |     2668.4 |     2586.8 |     2558.4 |      27.1 |      17.4 |      14.2 |          0 |
| qgis310-singlethread-multiinstance > somap310_grundplanav_sw     | somap_grundplanav_sw     |         15.4 |              20.9 |            20 |            0 |     3132.8 |     2926.8 |     2886.8 |      27.9 |      15.3 |      12.4 |          0 |
| qgis310-multithread-singleinstance > somap310_lk                 | somap_lk                 |          2.5 |               0   |            30 |            0 |     2273.5 |     2268.8 |     2264   |      23.3 |      16.4 |       9.4 |          0 |
| qgis310-unlimited-threads > somap310_lk                          | somap_lk                 |          2.6 |               5.7 |            30 |            0 |     2384   |     2382.2 |     2380.3 |      20.2 |      15.4 |      10.7 |          0 |
| qgis310-balanced > somap310_lk                                   | somap_lk                 |          2.9 |              17.3 |            30 |            0 |     2370.5 |     2365   |     2359.5 |      21.6 |      15.9 |      10.1 |          0 |
| qgis310-singlethread-multiinstance > somap310_lk                 | somap_lk                 |          3.5 |              40.7 |            30 |            0 |     2542.6 |     2521.9 |     2502.1 |      23.9 |      13.5 |       1.2 |          0 |

## Detail
| name                                                                                                                                                                                                                                                 | group                                   |   duration s |   group penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|--------------|-------------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis310-multithread-singleinstance > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment-sequential/20201012-102750/qgis310-multithread-singleinstance/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |        350.8 |               0   |           735 |            0 |          0 |      477.316  |           414   |          183 |         2860 |         719.4 |        857.2  |       1320.2  |      2.08852 |                305.646 |           0.91956  |     3161.2 |     2687.5 |     2251   |      30.1 |      19.6 |      12.4 |
| [qgis310-unlimited-threads > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment-sequential/20201012-102750/qgis310-unlimited-threads/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html)                   | somap_grundplanav_farbig > av_f_big.txt |        351   |               0.1 |           735 |            0 |          0 |      477.565  |           403   |          183 |         3049 |         719   |        853.4  |       1712.72 |      2.08755 |                305.504 |           0.919132 |     3557   |     2946.4 |     2401   |      35   |      20   |      12.3 |
| [qgis310-balanced > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment-sequential/20201012-102750/qgis310-balanced/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html)                                     | somap_grundplanav_farbig > av_f_big.txt |        423.9 |              20.8 |           735 |            0 |          0 |      576.687  |           550   |          175 |         3096 |         812.4 |        978.2  |       1816.8  |      1.7297  |                253.138 |           0.761577 |     3480.2 |     2883.5 |     2410.2 |      28.8 |      16.4 |      12.5 |
| [qgis310-singlethread-multiinstance > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment-sequential/20201012-102750/qgis310-singlethread-multiinstance/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |        528.3 |              50.6 |           735 |            0 |          0 |      718.797  |           707   |          179 |         3421 |        1051   |       1247.4  |       2489    |      1.38829 |                203.173 |           0.611253 |     3820.5 |     3153.1 |     2509.1 |      30.6 |      13   |      11.9 |
| [qgis310-multithread-singleinstance > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-deployment-sequential/20201012-102750/qgis310-multithread-singleinstance/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)               | somap_grundplanav_sw > av_sw.txt        |         12.7 |               0   |            20 |            0 |          0 |      635.2    |           389   |          224 |         2449 |        1274.3 |       2391.1  |       2449    |      1.56764 |                487.767 |           0.656451 |     2600.5 |     2428.6 |     2353.9 |      28.2 |      18.7 |      15.5 |
| [qgis310-unlimited-threads > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-deployment-sequential/20201012-102750/qgis310-unlimited-threads/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)                                 | somap_grundplanav_sw > av_sw.txt        |         12.9 |               1.4 |            20 |            0 |          0 |      644      |           395.5 |          228 |         2503 |        1340   |       2445.7  |       2503    |      1.54548 |                480.87  |           0.647168 |     2888.1 |     2699.2 |     2647.4 |      31.1 |      18.6 |      13   |
| [qgis310-balanced > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-deployment-sequential/20201012-102750/qgis310-balanced/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)                                                   | somap_grundplanav_sw > av_sw.txt        |         14   |               9.8 |            20 |            0 |          0 |      697.55   |           483   |          214 |         2566 |        1392.1 |       2507.65 |       2566    |      1.42806 |                444.338 |           0.598001 |     2668.4 |     2586.8 |     2558.4 |      27.1 |      17.4 |      14.2 |
| [qgis310-singlethread-multiinstance > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-deployment-sequential/20201012-102750/qgis310-singlethread-multiinstance/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)               | somap_grundplanav_sw > av_sw.txt        |         15.4 |              20.9 |            20 |            0 |          0 |      768.25   |           555   |          192 |         2295 |        1686.4 |       2265.2  |       2295    |      1.2966  |                403.432 |           0.54295  |     3132.8 |     2926.8 |     2886.8 |      27.9 |      15.3 |      12.4 |
| [qgis310-multithread-singleinstance > somap310_lk > lk.txt](../results/details/compare-deployment-sequential/20201012-102750/qgis310-multithread-singleinstance/somap310_lk/lk.txt/dashboard/index.html)                                             | somap_lk > lk.txt                       |          2.5 |               0   |            30 |            0 |          0 |       82.8333 |            78   |           52 |          240 |          94.3 |        160.25 |        240    |     11.8343  |                320.779 |           4.82772  |     2273.5 |     2268.8 |     2264   |      23.3 |      16.4 |       9.4 |
| [qgis310-unlimited-threads > somap310_lk > lk.txt](../results/details/compare-deployment-sequential/20201012-102750/qgis310-unlimited-threads/somap310_lk/lk.txt/dashboard/index.html)                                                               | somap_lk > lk.txt                       |          2.6 |               5.7 |            30 |            0 |          0 |       87.5667 |            82   |           55 |          249 |          95.6 |        167.6  |        249    |     11.2317  |                304.446 |           4.58191  |     2384   |     2382.2 |     2380.3 |      20.2 |      15.4 |      10.7 |
| [qgis310-balanced > somap310_lk > lk.txt](../results/details/compare-deployment-sequential/20201012-102750/qgis310-balanced/somap310_lk/lk.txt/dashboard/index.html)                                                                                 | somap_lk > lk.txt                       |          2.9 |              17.3 |            30 |            0 |          0 |       97.2    |            94   |           56 |          246 |         103.9 |        170.1  |        246    |     10.1215  |                274.351 |           4.12897  |     2370.5 |     2365   |     2359.5 |      21.6 |      15.9 |      10.1 |
| [qgis310-singlethread-multiinstance > somap310_lk > lk.txt](../results/details/compare-deployment-sequential/20201012-102750/qgis310-singlethread-multiinstance/somap310_lk/lk.txt/dashboard/index.html)                                             | somap_lk > lk.txt                       |          3.5 |              40.7 |            30 |            0 |          0 |      116.567  |           111.5 |           62 |          282 |         127.9 |        207.2  |        282    |      8.46979 |                229.581 |           3.45519  |     2542.6 |     2521.9 |     2502.1 |      23.9 |      13.5 |       1.2 |

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