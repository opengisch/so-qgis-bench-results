# QGIS Benchmark summary compare-deployment-sequential (20201103-090352)


compare different types of deployment for QGIS server 3.10 using the same settings

_run completed in 00h 32m 23s_

_Sample size per configuration 785_
## Summary plot
An interactive summary plot can be found [here](report_compare-deployment-sequential_20201103-090352_plot.html)

## Summary
| name                               | group   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|------------------------------------|---------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-unlimited-threads          | Global  |                387.2 | +0.0%                        |          368.3 | +0.0%                  |           873   | +0.0%                   |          464 |         5419 |            111.9 |           785 |            0 |     3490.8 |    2656.1  |     2383   |      31.7 |   18.6333 |      12.7 |          0 |
| qgis310-multithread-singleinstance | Global  |                394   | +1.8%                        |          374.7 | +1.7%                  |           933.5 | +6.9%                   |          463 |         4500 |            111.9 |           785 |            0 |     3230.4 |    2416.03 |     2248.1 |      31.3 |   18.6333 |      11.7 |          0 |
| qgis310-balanced                   | Global  |                469.4 | +21.2%                       |          450.4 | +22.3%                 |          1151.5 | +31.9%                  |          461 |         6040 |            111.9 |           785 |            0 |     3417.3 |    2584.17 |     2325.6 |      33.9 |   17.4    |      11.9 |          0 |
| qgis310-singlethread-multiinstance | Global  |                579.2 | +49.6%                       |          560.8 | +52.3%                 |          1412.5 | +61.8%                  |          479 |         5774 |            111.9 |           785 |            0 |     3738   |    2921.63 |     2663.1 |      29.6 |   14.3333 |      12   |          0 |

## Aggregated
| name                                                             | group                    |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|------------------------------------------------------------------|--------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-unlimited-threads > somap310_grundplanav_farbig          | somap_grundplanav_farbig |                360.2 | +0.0%                        |          353.1 | +0.0%                  |           414   | +0.0%                   |          184 |         2807 |            105   |           735 |            0 |     3490.8 |     2912.6 |     2383   |      31.7 |      19.9 |      12.7 |          0 |
| qgis310-multithread-singleinstance > somap310_grundplanav_farbig | somap_grundplanav_farbig |                368.4 | +2.3%                        |          361.3 | +2.3%                  |           438   | +5.8%                   |          194 |         2886 |            105   |           735 |            0 |     3230.4 |     2657.5 |     2262.5 |      31   |      19.5 |      12.5 |          0 |
| qgis310-balanced > somap310_grundplanav_farbig                   | somap_grundplanav_farbig |                440.4 | +22.3%                       |          433.4 | +22.7%                 |           566   | +36.7%                  |          174 |         3214 |            105   |           735 |            0 |     3417.3 |     2832.1 |     2369.4 |      33.9 |      16.4 |      12.7 |          0 |
| qgis310-singlethread-multiinstance > somap310_grundplanav_farbig | somap_grundplanav_farbig |                550.1 | +52.7%                       |          543.3 | +53.9%                 |           738   | +78.3%                  |          174 |         3731 |            105   |           735 |            0 |     3738   |     3167.5 |     2664.5 |      29.6 |      12.9 |      12   |          0 |
| qgis310-multithread-singleinstance > somap310_grundplanav_sw     | somap_grundplanav_sw     |                 16.8 | +0.0%                        |           10.6 | +0.0%                  |           408.5 | +7.4%                   |          205 |         1339 |              6.1 |            20 |            0 |     2565.7 |     2339.9 |     2302.4 |      31.3 |      18.1 |      15.2 |          0 |
| qgis310-unlimited-threads > somap310_grundplanav_sw              | somap_grundplanav_sw     |                 18.5 | +10.1%                       |           12.7 | +19.2%                 |           380.5 | +0.0%                   |          227 |         2341 |              6.1 |            20 |            0 |     2850.1 |     2645.7 |     2597.8 |      28.1 |      19.3 |      14.6 |          0 |
| qgis310-singlethread-multiinstance > somap310_grundplanav_sw     | somap_grundplanav_sw     |                 19.4 | +15.5%                       |           13.6 | +28.2%                 |           553   | +45.3%                  |          219 |         1732 |              6.1 |            20 |            0 |     3116.7 |     2930.5 |     2860.1 |      23.7 |      13.8 |      12.4 |          0 |
| qgis310-balanced > somap310_grundplanav_sw                       | somap_grundplanav_sw     |                 20.2 | +20.2%                       |           14   | +32.2%                 |           490.5 | +28.9%                  |          230 |         2564 |              6.1 |            20 |            0 |     2737.4 |     2546.2 |     2487.3 |      32.3 |      17.5 |      13.3 |          0 |
| qgis310-unlimited-threads > somap310_lk                          | somap_lk                 |                  8.5 | +0.0%                        |            2.6 | +0.0%                  |            78.5 | +0.0%                   |           53 |          271 |              0.8 |            30 |            0 |     2421.2 |     2410   |     2398.8 |      20.3 |      16.7 |      13   |          0 |
| qgis310-multithread-singleinstance > somap310_lk                 | somap_lk                 |                  8.8 | +3.5%                        |            2.8 | +8.1%                  |            87   | +10.8%                  |           64 |          275 |              0.8 |            30 |            0 |     2253.3 |     2250.7 |     2248.1 |      24.8 |      18.3 |      11.7 |          0 |
| qgis310-balanced > somap310_lk                                   | somap_lk                 |                  8.8 | +3.5%                        |            3   | +15.3%                 |            95   | +21.0%                  |           57 |          262 |              0.8 |            30 |            0 |     2404.2 |     2374.2 |     2325.6 |      28.8 |      18.3 |      11.9 |          0 |
| qgis310-singlethread-multiinstance > somap310_lk                 | somap_lk                 |                  9.7 | +14.1%                       |            3.9 | +51.6%                 |           121.5 | +54.8%                  |           86 |          311 |              0.8 |            30 |            0 |     2671.6 |     2666.9 |     2663.1 |      18   |      16.3 |      14.2 |          0 |

## Detail
| name                                                                                                                                                                                                                                                 | group                                   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis310-unlimited-threads > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment-sequential/20201103-090352/qgis310-unlimited-threads/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html)                   | somap_grundplanav_farbig > av_f_big.txt |                360.2 | +0.0%                        |          353.1 | +0.0%                  |           414   | +0.0%                   |           735 |            0 |          0 |      480.405  |          184 |         2807 |         726.8 |        862.8  |       1514.08 |      2.075   |                303.671 |           0.913607 |            105   |     3490.8 |     2912.6 |     2383   |      31.7 |      19.9 |      12.7 |
| [qgis310-multithread-singleinstance > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment-sequential/20201103-090352/qgis310-multithread-singleinstance/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |                368.4 | +2.3%                        |          361.3 | +2.3%                  |           438   | +5.8%                   |           735 |            0 |          0 |      491.512  |          194 |         2886 |         731.4 |        885.2  |       1311.28 |      2.02799 |                296.793 |           0.892909 |            105   |     3230.4 |     2657.5 |     2262.5 |      31   |      19.5 |      12.5 |
| [qgis310-balanced > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment-sequential/20201103-090352/qgis310-balanced/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html)                                     | somap_grundplanav_farbig > av_f_big.txt |                440.4 | +22.3%                       |          433.4 | +22.7%                 |           566   | +36.7%                  |           735 |            0 |          0 |      589.669  |          174 |         3214 |         838.2 |        993.8  |       1721.4  |      1.69129 |                247.518 |           0.744664 |            105   |     3417.3 |     2832.1 |     2369.4 |      33.9 |      16.4 |      12.7 |
| [qgis310-singlethread-multiinstance > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment-sequential/20201103-090352/qgis310-singlethread-multiinstance/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |                550.1 | +52.7%                       |          543.3 | +53.9%                 |           738   | +78.3%                  |           735 |            0 |          0 |      739.195  |          174 |         3731 |        1073   |       1267.4  |       2089.96 |      1.35003 |                197.572 |           0.594408 |            105   |     3738   |     3167.5 |     2664.5 |      29.6 |      12.9 |      12   |
| [qgis310-multithread-singleinstance > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-deployment-sequential/20201103-090352/qgis310-multithread-singleinstance/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)               | somap_grundplanav_sw > av_sw.txt        |                 16.8 | +0.0%                        |           10.6 | +0.0%                  |           408.5 | +7.4%                   |            20 |            0 |          0 |      531.1    |          205 |         1339 |        1140.5 |       1330.1  |       1339    |      1.87283 |                582.729 |           0.784249 |              6.1 |     2565.7 |     2339.9 |     2302.4 |      31.3 |      18.1 |      15.2 |
| [qgis310-unlimited-threads > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-deployment-sequential/20201103-090352/qgis310-unlimited-threads/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)                                 | somap_grundplanav_sw > av_sw.txt        |                 18.5 | +10.1%                       |           12.7 | +19.2%                 |           380.5 | +0.0%                   |            20 |            0 |          0 |      632.95   |          227 |         2341 |        1336.6 |       2291.7  |       2341    |      1.57257 |                489.303 |           0.658515 |              6.1 |     2850.1 |     2645.7 |     2597.8 |      28.1 |      19.3 |      14.6 |
| [qgis310-singlethread-multiinstance > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-deployment-sequential/20201103-090352/qgis310-singlethread-multiinstance/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)               | somap_grundplanav_sw > av_sw.txt        |                 19.4 | +15.5%                       |           13.6 | +28.2%                 |           553   | +45.3%                  |            20 |            0 |          0 |      681      |          219 |         1732 |        1592   |       1727.5  |       1732    |      1.46177 |                454.828 |           0.612118 |              6.1 |     3116.7 |     2930.5 |     2860.1 |      23.7 |      13.8 |      12.4 |
| [qgis310-balanced > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-deployment-sequential/20201103-090352/qgis310-balanced/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)                                                   | somap_grundplanav_sw > av_sw.txt        |                 20.2 | +20.2%                       |           14   | +32.2%                 |           490.5 | +28.9%                  |            20 |            0 |          0 |      702.15   |          230 |         2564 |        1429.8 |       2508.3  |       2564    |      1.41874 |                441.439 |           0.594098 |              6.1 |     2737.4 |     2546.2 |     2487.3 |      32.3 |      17.5 |      13.3 |
| [qgis310-unlimited-threads > somap310_lk > lk.txt](../results/details/compare-deployment-sequential/20201103-090352/qgis310-unlimited-threads/somap310_lk/lk.txt/dashboard/index.html)                                                               | somap_lk > lk.txt                       |                  8.5 | +0.0%                        |            2.6 | +0.0%                  |            78.5 | +0.0%                   |            30 |            0 |          0 |       85.6    |           53 |          271 |          93   |        174.2  |        271    |     11.4416  |                310.147 |           4.66754  |              0.8 |     2421.2 |     2410   |     2398.8 |      20.3 |      16.7 |      13   |
| [qgis310-multithread-singleinstance > somap310_lk > lk.txt](../results/details/compare-deployment-sequential/20201103-090352/qgis310-multithread-singleinstance/somap310_lk/lk.txt/dashboard/index.html)                                             | somap_lk > lk.txt                       |                  8.8 | +3.5%                        |            2.8 | +8.1%                  |            87   | +10.8%                  |            30 |            0 |          0 |       92.5667 |           64 |          275 |          96   |        178.75 |        275    |     10.6007  |                287.352 |           4.32448  |              0.8 |     2253.3 |     2250.7 |     2248.1 |      24.8 |      18.3 |      11.7 |
| [qgis310-balanced > somap310_lk > lk.txt](../results/details/compare-deployment-sequential/20201103-090352/qgis310-balanced/somap310_lk/lk.txt/dashboard/index.html)                                                                                 | somap_lk > lk.txt                       |                  8.8 | +3.5%                        |            3   | +15.3%                 |            95   | +21.0%                  |            30 |            0 |          0 |       98.7    |           57 |          262 |         104.9 |        180.05 |        262    |      9.96016 |                269.988 |           4.06317  |              0.8 |     2404.2 |     2374.2 |     2325.6 |      28.8 |      18.3 |      11.9 |
| [qgis310-singlethread-multiinstance > somap310_lk > lk.txt](../results/details/compare-deployment-sequential/20201103-090352/qgis310-singlethread-multiinstance/somap310_lk/lk.txt/dashboard/index.html)                                             | somap_lk > lk.txt                       |                  9.7 | +14.1%                       |            3.9 | +51.6%                 |           121.5 | +54.8%                  |            30 |            0 |          0 |      129.767  |           86 |          311 |         141   |        218.6  |        311    |      7.57767 |                205.407 |           3.09126  |              0.8 |     2671.6 |     2666.9 |     2663.1 |      18   |      16.3 |      14.2 |

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
      QGIS_REPLICAS: '3'
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
      QGIS_REPLICAS: '1'
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
      QGIS_REPLICAS: '6'
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
      QGIS_REPLICAS: '3'
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