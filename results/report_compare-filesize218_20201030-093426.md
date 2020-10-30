# QGIS Benchmark summary compare-filesize218 (20201030-093426)


compare the effect of different QGIS project file size in QGIS 2.18

_run completed in 00h 14m 23s_

_Sample size per configuration 11187_
## Summary plot
An interactive summary plot can be found [here](report_compare-filesize218_20201030-093426_plot.html)

## Summary
| name              | group   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|-------------------|---------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-bigfile   | Global  |                 29.3 | +0.0%                        |           68.1 | +0.0%                  |               6 | +0.0%                   |            3 |         3301 |         11187 |        11187 |     4192.1 |    4000.67 |     3908.7 |      82.4 |   56.3    |      32.8 |        100 |
| qgis218-smallfile | Global  |                794.2 | +2610.6%                     |         7650.3 | +11127.3%              |            1236 | +20500.0%               |          438 |       167392 |         11187 |            4 |     9545.5 |    6206.03 |     3876.8 |      99.9 |   95.9667 |      12.9 |          0 |

## Aggregated
| name                                            | group                    |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|-------------------------------------------------|--------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-bigfile > somap218                      | somap                    |                 29.3 | +0.0%                        |           68.1 | +0.0%                  |               6 | +0.0%                   |            3 |         3301 |         11187 |        11187 |     4192.1 |    4000.67 |     3908.7 |      82.4 |      56.3 |      32.8 |      100   |
| qgis218-smallfile > somap218_grundplanav_farbig | somap_grundplanav_farbig |                 80.9 | +0.0%                        |          711.9 | +0.0%                  |             594 | +0.0%                   |          215 |        51030 |           735 |            0 |     5451.2 |    5064.5  |     4555.9 |      98.8 |      93.7 |      15.4 |        0   |
| qgis218-smallfile > somap218_grundplanav_sw     | somap_grundplanav_sw     |                551.3 | +0.0%                        |         5395.8 | +0.0%                  |             503 | +0.0%                   |          217 |        64067 |          5190 |            4 |     9545.5 |    8316.1  |     4785   |      99.9 |      97.6 |      12.9 |        0.1 |
| qgis218-smallfile > somap218_lk                 | somap_lk                 |                162   | +0.0%                        |         1542.6 | +0.0%                  |             139 | +0.0%                   |            6 |        52295 |          5262 |            0 |     6419.1 |    5237.5  |     3876.8 |      99.5 |      96.6 |      28.6 |        0   |

## Detail
| name                                                                                                                                                                                                     | group                                   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |    errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|-------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218-bigfile > somap218 > av_f_big.txt](../results/details/compare-filesize218/20201030-093426/qgis218-bigfile/somap218/av_f_big.txt/dashboard/index.html)                                           | somap > av_f_big.txt                    |                  7.4 | +0.0%                        |            5.2 | +0.0%                  |               2 | +0.0%                   |           735 |          735 | 100         |       7.12925 |            1 |         1004 |           4   |          6    |         21.4  |    461.104   |                224.145 |          194.465   |     3976   |     3942.4 |     3908.7 |      60.7 |      48   |      35.4 |
| [qgis218-bigfile > somap218 > av_sw_big.txt](../results/details/compare-filesize218/20201030-093426/qgis218-bigfile/somap218/av_sw_big.txt/dashboard/index.html)                                         | somap > av_sw_big.txt                   |                  9.9 | +0.0%                        |           24.2 | +0.0%                  |               2 | +0.0%                   |          5190 |         5190 | 100         |       4.67148 |            1 |         1006 |           3   |          4    |          7    |   1441.67    |                700.553 |          606.768   |     4118.1 |     4032.4 |     3970.6 |      82.4 |      68.4 |      49.1 |
| [qgis218-bigfile > somap218 > lk_big.txt](../results/details/compare-filesize218/20201030-093426/qgis218-bigfile/somap218/lk_big.txt/dashboard/index.html)                                               | somap > lk_big.txt                      |                 12   | +0.0%                        |           38.7 | +0.0%                  |               2 | +0.0%                   |          5262 |         5262 | 100         |       7.34607 |            1 |         1291 |           3   |          3    |          7    |   1039.72    |                505.246 |          523.626   |     4192.1 |     4027.2 |     3928   |      68.2 |      52.5 |      32.8 |
| [qgis218-smallfile > somap218_grundplanav_farbig > av_f_big.txt](../results/details/compare-filesize218/20201030-093426/qgis218-smallfile/somap218_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |                 80.9 | +0.0%                        |          711.9 | +0.0%                  |             594 | +0.0%                   |           735 |            0 |   0         |     968.532   |          215 |        51030 |        1339.2 |       1648.8  |       7190.28 |      9.80301 |               1715.59  |            4.31619 |     5451.2 |     5064.5 |     4555.9 |      98.8 |      93.7 |      15.4 |
| [qgis218-smallfile > somap218_grundplanav_sw > av_sw_big.txt](../results/details/compare-filesize218/20201030-093426/qgis218-smallfile/somap218_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw_big.txt    |                551.3 | +0.0%                        |         5395.8 | +0.0%                  |             503 | +0.0%                   |          5190 |            4 |   0.0770713 |    1039.65    |          217 |        64067 |        1844   |       2407.35 |       6030.44 |      9.52432 |               2964.02  |            4.14811 |     9545.5 |     8316.1 |     4785   |      99.9 |      97.6 |      12.9 |
| [qgis218-smallfile > somap218_lk > lk_big.txt](../results/details/compare-filesize218/20201030-093426/qgis218-smallfile/somap218_lk/lk_big.txt/dashboard/index.html)                                     | somap_lk > lk_big.txt                   |                162   | +0.0%                        |         1542.6 | +0.0%                  |             139 | +0.0%                   |          5262 |            0 |   0         |     293.161   |            6 |        52295 |         631.7 |        893.7  |       1799.92 |     33.7966  |               1720.59  |           17.1198  |     6419.1 |     5237.5 |     3876.8 |      99.5 |      96.6 |      28.6 |

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
description: 'compare the effect of different QGIS project file size in QGIS 2.18'

test-cases:
  base:
    active: no
    template: docker-compose-qgis-2
    path-prefix: 'ows'
    compose-variables:
      QGIS_REPLICAS: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_FCGI_PROCESSES: '1'
      PG_SERVICE: 'pg_service.conf'

  qgis218-bigfile:
    active: yes
    inherit: base
    projects:
      somap218:
      - lk_big.txt
      - av_f_big.txt
      - av_sw_big.txt

  qgis218-smallfile:
    inherit: base
    active: yes
    projects:
      somap218_lk:
        - lk_big.txt
      somap218_grundplanav_farbig:
        - av_f_big.txt
      somap218_grundplanav_sw:
        - av_sw_big.txt

```
### parsed test configurations

```
description: compare the effect of different QGIS project file size in QGIS 2.18
test-cases:
  base:
    active: false
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '50'
    path-prefix: ows
    template: docker-compose-qgis-2
  qgis218-bigfile:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '50'
    inherit: base
    path-prefix: ows
    projects:
      somap218:
      - lk_big.txt
      - av_f_big.txt
      - av_sw_big.txt
    template: docker-compose-qgis-2
  qgis218-smallfile:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '50'
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

```