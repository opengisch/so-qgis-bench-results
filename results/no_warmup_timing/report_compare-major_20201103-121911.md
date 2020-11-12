# QGIS Benchmark summary compare-major (20201103-121911)


compare different version of QGIS servers using the same settings

_run completed in 00h 54m 00s_

_Sample size per configuration 11187_
## Summary plot
An interactive summary plot can be found [here](report_compare-major_20201103-121911_plot.html)

## Summary
| name    | group   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------|---------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis316 | Global  |                635.5 | +0.0%                        |         6108.4 | +0.0%                  |          1425   | +0.0%                   |           17 |        17057 |           1720   |         11187 |            0 |     8929.5 |    5120.53 |     2735   |      96.4 |   73.2333 |      16.7 |          0 |
| qgis218 | Global  |                760.2 | +19.6%                       |         7337.3 | +20.1%                 |          1468   | +3.0%                   |          453 |        28463 |           1965.3 |         11187 |            0 |     9264.2 |    5391.73 |     2672.5 |      99.9 |   97.7333 |      13.3 |          0 |
| qgis310 | Global  |                849.8 | +33.7%                       |         8260.7 | +35.2%                 |          2011   | +41.1%                  |          411 |        14960 |           1719.9 |         11187 |            0 |     9236.1 |    5205.03 |     2657.9 |      98.4 |   73.6333 |      16.8 |          0 |
| qgis314 | Global  |                863.8 | +35.9%                       |         8386   | +37.3%                 |          2104.5 | +47.7%                  |          456 |        15746 |           1719.8 |         11187 |            0 |     9540.7 |    5288.5  |     2708.3 |      97.2 |   73.6667 |      15.8 |          0 |

## Aggregated
| name                                  | group                    |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------------------------------------|--------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis316 > somap316_grundplanav_farbig | somap_grundplanav_farbig |                 65.3 | +0.0%                        |          585.5 | +0.0%                  |           731   | +2.2%                   |            8 |         4793 |            105   |           735 |            0 |     4975.2 |     4312.9 |     3030.7 |      96.4 |      73.3 |      26.5 |          0 |
| qgis218 > somap218_grundplanav_farbig | somap_grundplanav_farbig |                 72.6 | +11.2%                       |          656.8 | +12.2%                 |           715   | +0.0%                   |          232 |        10059 |            125.6 |           735 |            0 |     4590.9 |     4179.5 |     3687.9 |      99.3 |      97.2 |      29.3 |          0 |
| qgis310 > somap310_grundplanav_farbig | somap_grundplanav_farbig |                 86.3 | +32.2%                       |          794.4 | +35.7%                 |           944   | +32.0%                  |          187 |         4652 |            105   |           735 |            0 |     5183.8 |     4448.5 |     2933.9 |      91.6 |      73.1 |      27.3 |          0 |
| qgis314 > somap314_grundplanav_farbig | somap_grundplanav_farbig |                 86.5 | +32.5%                       |          797.2 | +36.2%                 |           991   | +38.6%                  |          213 |         4615 |            105   |           735 |            0 |     5158   |     4533.8 |     2923.7 |      91.7 |      73.3 |      24.1 |          0 |
| qgis316 > somap316_grundplanav_sw     | somap_grundplanav_sw     |                400.5 | +0.0%                        |         3913.5 | +0.0%                  |           571   | +0.0%                   |            6 |         6793 |           1371.9 |          5190 |            0 |     8929.5 |     7142.7 |     3751.2 |      95.2 |      73.7 |      25.4 |          0 |
| qgis218 > somap218_grundplanav_sw     | somap_grundplanav_sw     |                534.6 | +33.5%                       |         5225.2 | +33.5%                 |           603   | +5.6%                   |          215 |        15336 |           1578.1 |          5190 |            0 |     9264.2 |     7806.3 |     3923.1 |      99.9 |      98.1 |      13.3 |          0 |
| qgis310 > somap310_grundplanav_sw     | somap_grundplanav_sw     |                558.8 | +39.5%                       |         5497   | +40.5%                 |           868   | +52.0%                  |          191 |         7093 |           1371.7 |          5190 |            0 |     9236.1 |     7332.5 |     4076.6 |      98.4 |      73.9 |      21.8 |          0 |
| qgis314 > somap314_grundplanav_sw     | somap_grundplanav_sw     |                566.9 | +41.5%                       |         5581.1 | +42.6%                 |           902.5 | +58.1%                  |          205 |         6783 |           1371.7 |          5190 |            0 |     9540.7 |     7472.4 |     4245.4 |      97.2 |      74.1 |      27   |          0 |
| qgis218 > somap218_lk                 | somap_lk                 |                153   | +0.0%                        |         1455.3 | +0.0%                  |           150   | +22.0%                  |            6 |         3068 |            261.6 |          5262 |            0 |     5653.3 |     4189.4 |     2672.5 |      99.6 |      97.9 |      13.6 |          0 |
| qgis316 > somap316_lk                 | somap_lk                 |                169.7 | +10.9%                       |         1609.3 | +10.6%                 |           123   | +0.0%                   |            3 |         5471 |            243.1 |          5262 |            0 |     5641.4 |     3906   |     2735   |      89.3 |      72.7 |      16.7 |          0 |
| qgis310 > somap310_lk                 | somap_lk                 |                204.7 | +33.8%                       |         1969.4 | +35.3%                 |           199   | +61.8%                  |           33 |         3215 |            243.2 |          5262 |            0 |     5192.7 |     3834.1 |     2657.9 |      96.1 |      73.9 |      16.8 |          0 |
| qgis314 > somap314_lk                 | somap_lk                 |                210.4 | +37.5%                       |         2007.6 | +38.0%                 |           211   | +71.5%                  |           38 |         4348 |            243.1 |          5262 |            0 |     5432   |     3859.3 |     2708.3 |      92.2 |      73.6 |      15.8 |          0 |

## Detail
| name                                                                                                                                                                           | group                                   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis316 > somap316_grundplanav_farbig > av_f_big.txt](../results/details/compare-major/20201103-121911/qgis316/somap316_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |                 65.3 | +0.0%                        |          585.5 | +0.0%                  |           731   | +2.2%                   |           735 |            0 |          0 |       796.62  |            8 |         4793 |        1474.4 |       1729.6  |       2988.04 |     12.3908  |                1813.13 |            5.4556  |            105   |     4975.2 |     4312.9 |     3030.7 |      96.4 |      73.3 |      26.5 |
| [qgis218 > somap218_grundplanav_farbig > av_f_big.txt](../results/details/compare-major/20201103-121911/qgis218/somap218_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |                 72.6 | +11.2%                       |          656.8 | +12.2%                 |           715   | +0.0%                   |           735 |            0 |          0 |       893.622 |          232 |        10059 |        1450.6 |       1793.2  |       3100    |     10.9713  |                1920.38 |            4.83058 |            125.6 |     4590.9 |     4179.5 |     3687.9 |      99.3 |      97.2 |      29.3 |
| [qgis310 > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-major/20201103-121911/qgis310/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |                 86.3 | +32.2%                       |          794.4 | +35.7%                 |           944   | +32.0%                  |           735 |            0 |          0 |      1080.8   |          187 |         4652 |        1889.6 |       2109.4  |       3156.56 |      9.12941 |                1336.06 |            4.01962 |            105   |     5183.8 |     4448.5 |     2933.9 |      91.6 |      73.1 |      27.3 |
| [qgis314 > somap314_grundplanav_farbig > av_f_big.txt](../results/details/compare-major/20201103-121911/qgis314/somap314_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |                 86.5 | +32.5%                       |          797.2 | +36.2%                 |           991   | +38.6%                  |           735 |            0 |          0 |      1084.68  |          213 |         4615 |        1829   |       2097    |       3091.04 |      9.11063 |                1333.26 |            4.01134 |            105   |     5158   |     4533.8 |     2923.7 |      91.7 |      73.3 |      24.1 |
| [qgis316 > somap316_grundplanav_sw > av_sw_big.txt](../results/details/compare-major/20201103-121911/qgis316/somap316_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw_big.txt    |                400.5 | +0.0%                        |         3913.5 | +0.0%                  |           571   | +0.0%                   |          5190 |            0 |          0 |       754.055 |            6 |         6793 |        1638   |       2127    |       3181.89 |     13.1743  |                3565.97 |            5.73776 |           1371.9 |     8929.5 |     7142.7 |     3751.2 |      95.2 |      73.7 |      25.4 |
| [qgis218 > somap218_grundplanav_sw > av_sw_big.txt](../results/details/compare-major/20201103-121911/qgis218/somap218_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw_big.txt    |                534.6 | +33.5%                       |         5225.2 | +33.5%                 |           603   | +5.6%                   |          5190 |            0 |          0 |      1006.78  |          215 |        15336 |        2273.7 |       2821.15 |       5665.01 |      9.82746 |                3059.95 |            4.28013 |           1578.1 |     9264.2 |     7806.3 |     3923.1 |      99.9 |      98.1 |      13.3 |
| [qgis310 > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-major/20201103-121911/qgis310/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw_big.txt    |                558.8 | +39.5%                       |         5497   | +40.5%                 |           868   | +52.0%                  |          5190 |            0 |          0 |      1059.15  |          191 |         7093 |        1974.9 |       2430    |       3385.27 |      9.39321 |                2542.19 |            4.091   |           1371.7 |     9236.1 |     7332.5 |     4076.6 |      98.4 |      73.9 |      21.8 |
| [qgis314 > somap314_grundplanav_sw > av_sw_big.txt](../results/details/compare-major/20201103-121911/qgis314/somap314_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw_big.txt    |                566.9 | +41.5%                       |         5581.1 | +42.6%                 |           902.5 | +58.1%                  |          5190 |            0 |          0 |      1075.35  |          205 |         6783 |        1939.5 |       2375.8  |       3504.63 |      9.25622 |                2505.1  |            4.03134 |           1371.7 |     9540.7 |     7472.4 |     4245.4 |      97.2 |      74.1 |      27   |
| [qgis218 > somap218_lk > lk_big.txt](../results/details/compare-major/20201103-121911/qgis218/somap218_lk/lk_big.txt/dashboard/index.html)                                     | somap_lk > lk_big.txt                   |                153   | +0.0%                        |         1455.3 | +0.0%                  |           150   | +22.0%                  |          5262 |            0 |          0 |       276.571 |            6 |         3068 |         730   |       1035    |       1787.92 |     35.8652  |                1825.84 |           18.1677  |            261.6 |     5653.3 |     4189.4 |     2672.5 |      99.6 |      97.9 |      13.6 |
| [qgis316 > somap316_lk > lk_big.txt](../results/details/compare-major/20201103-121911/qgis316/somap316_lk/lk_big.txt/dashboard/index.html)                                     | somap_lk > lk_big.txt                   |                169.7 | +10.9%                       |         1609.3 | +10.6%                 |           123   | +0.0%                   |          5262 |            0 |          0 |       305.839 |            3 |         5471 |         816   |       1145.85 |       1934.44 |     32.2174  |                1524.4  |           16.3198  |            243.1 |     5641.4 |     3906   |     2735   |      89.3 |      72.7 |      16.7 |
| [qgis310 > somap310_lk > lk_big.txt](../results/details/compare-major/20201103-121911/qgis310/somap310_lk/lk_big.txt/dashboard/index.html)                                     | somap_lk > lk_big.txt                   |                204.7 | +33.8%                       |         1969.4 | +35.3%                 |           199   | +61.8%                  |          5262 |            0 |          0 |       374.262 |           33 |         3215 |         920   |       1196    |       2006.7  |     26.4997  |                1254.34 |           13.4235  |            243.2 |     5192.7 |     3834.1 |     2657.9 |      96.1 |      73.9 |      16.8 |
| [qgis314 > somap314_lk > lk_big.txt](../results/details/compare-major/20201103-121911/qgis314/somap314_lk/lk_big.txt/dashboard/index.html)                                     | somap_lk > lk_big.txt                   |                210.4 | +37.5%                       |         2007.6 | +38.0%                 |           211   | +71.5%                  |          5262 |            0 |          0 |       381.534 |           38 |         4348 |         902   |       1207.4  |       1929.74 |     25.8172  |                1221.47 |           13.0778  |            243.1 |     5432   |     3859.3 |     2708.3 |      92.2 |      73.6 |      15.8 |

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
description: 'compare different version of QGIS servers using the same settings'
test-cases:
  base:
    active: no
    compose-variables:
      QGIS_REPLICAS: '6'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_SERVER_MAX_THREADS: '1' #QGIS3
      QGIS_FCGI_PROCESSES: '1' #QGIS2
      PG_SERVICE: 'pg_service.conf'

  qgis218:
    active: yes
    inherit: base
    template: docker-compose-qgis-2
    path-prefix: 'ows'
    projects:
      somap218_lk:
        - lk_big.txt
      somap218_grundplanav_farbig:
        - av_f_big.txt
      somap218_grundplanav_sw:
        - av_sw_big.txt

  qgis310:
    active: yes
    inherit: base
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.10'
    projects:
      somap310_lk:
        - lk_big.txt
      somap310_grundplanav_farbig:
        - av_f_big.txt
      somap310_grundplanav_sw:
        - av_sw_big.txt

  qgis314:
    active: yes
    inherit: qgis310
    compose-variables:
      QGIS_VERSION: '3.14'
    projects:
      somap314_lk:
        - lk_big.txt
      somap314_grundplanav_farbig:
        - av_f_big.txt
      somap314_grundplanav_sw:
        - av_sw_big.txt

  qgis316:
    active: yes
    inherit: qgis310
    compose-variables:
      QGIS_VERSION: '3.16'
    projects:
      somap316_lk:
        - lk_big.txt
      somap316_grundplanav_farbig:
        - av_f_big.txt
      somap316_grundplanav_sw:
        - av_sw_big.txt
```
### parsed test configurations

```
description: compare different version of QGIS servers using the same settings
test-cases:
  base:
    active: false
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
  qgis218:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
    inherit: base
    path-prefix: ows
    projects:
      somap218_grundplanav_farbig:
      - av_f_big.txt
      somap218_grundplanav_sw:
      - av_sw_big.txt
      somap218_lk:
      - lk_big.txt
    template: docker-compose-qgis-2
  qgis310:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: base
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f_big.txt
      somap310_grundplanav_sw:
      - av_sw_big.txt
      somap310_lk:
      - lk_big.txt
    template: docker-compose-qgis-3-nginx
  qgis314:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.14'
    inherit: qgis310
    path-prefix: ogc
    projects:
      somap314_grundplanav_farbig:
      - av_f_big.txt
      somap314_grundplanav_sw:
      - av_sw_big.txt
      somap314_lk:
      - lk_big.txt
    template: docker-compose-qgis-3-nginx
  qgis316:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.16'
    inherit: qgis310
    path-prefix: ogc
    projects:
      somap316_grundplanav_farbig:
      - av_f_big.txt
      somap316_grundplanav_sw:
      - av_sw_big.txt
      somap316_lk:
      - lk_big.txt
    template: docker-compose-qgis-3-nginx

```