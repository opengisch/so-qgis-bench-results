# QGIS Benchmark summary compare-filesize218 (20201014-184559)


compare the effect of different QGIS project file size in QGIS 2.18

_run completed in 00h 27m 26s_
## Summary plot
An interactive summary plot can be found [here](report_compare-filesize218_20201014-184559_plot.html)

## Summary
| name              | group   |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|-------------------|---------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-smallfile | Global  |       7139.5 |               0   |         11187 |            5 |     8479.5 |    4766.2  |     2408.2 |      99.8 |   96.5333 |       8.7 |        0   |
| qgis218-bigfile   | Global  |       8823.6 |              23.6 |         11187 |            6 |    11159.2 |    8479.93 |     2947.3 |      99.9 |   97.5    |       0.2 |        0.1 |

## Aggregated
| name                                            | group                    |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|-------------------------------------------------|--------------------------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-bigfile > somap218                      | somap                    |       8823.6 |                 0 |         11187 |            6 |    11159.2 |    8479.93 |     2947.3 |      99.9 |      97.5 |       0.2 |        0.1 |
| qgis218-smallfile > somap218_grundplanav_farbig | somap_grundplanav_farbig |        653.9 |                 0 |           735 |            1 |     3926   |    3523.7  |     3021.2 |      99   |      95.4 |      25.8 |        0.1 |
| qgis218-smallfile > somap218_grundplanav_sw     | somap_grundplanav_sw     |       5054.6 |                 0 |          5190 |            4 |     8479.5 |    7039.5  |     3289.6 |      99.8 |      97.8 |      13.2 |        0.1 |
| qgis218-smallfile > somap218_lk                 | somap_lk                 |       1431.1 |                 0 |          5262 |            0 |     4940.5 |    3735.4  |     2408.2 |      99.5 |      96.4 |       8.7 |        0   |

## Detail
| name                                                                                                                                                                                                     | group                                   |   duration s |   group penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|--------------|-------------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218-bigfile > somap218 > av_f_big.txt](../results/details/compare-filesize218/20201014-184559/qgis218-bigfile/somap218/av_f_big.txt/dashboard/index.html)                                           | somap > av_f_big.txt                    |        774.2 |                 0 |           735 |            0 |  0         |      1053.33  |           673   |          255 |        53567 |        1448.2 |       2158    |       8233.72 |      9.32919 |                1979.85 |            3.93447 |     8173.6 |     7647.4 |     6748   |      99.7 |      97   |      27   |
| [qgis218-bigfile > somap218 > av_sw_big.txt](../results/details/compare-filesize218/20201014-184559/qgis218-bigfile/somap218/av_sw_big.txt/dashboard/index.html)                                         | somap > av_sw_big.txt                   |       6510.8 |                 0 |          5190 |            6 |  0.115607  |      1254.49  |           754   |          261 |        64070 |        1879   |       2532.45 |       6982.52 |      7.90363 |                4311.55 |            3.32648 |    11159.2 |    10413.4 |     7361.3 |      99.9 |      98.5 |      13   |
| [qgis218-bigfile > somap218 > lk_big.txt](../results/details/compare-filesize218/20201014-184559/qgis218-bigfile/somap218/lk_big.txt/dashboard/index.html)                                               | somap > lk_big.txt                      |       1538.6 |                 0 |          5262 |            0 |  0         |       292.395 |           128.5 |            7 |        52453 |         621.7 |        873.85 |       1787.84 |     33.9068  |                1726.24 |           17.0763  |     8642.6 |     7379   |     2947.3 |      99.9 |      97   |       0.2 |
| [qgis218-smallfile > somap218_grundplanav_farbig > av_f_big.txt](../results/details/compare-filesize218/20201014-184559/qgis218-smallfile/somap218_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |        653.9 |                 0 |           735 |            1 |  0.136054  |       889.627 |           521   |          216 |        64074 |        1270.8 |       1539.6  |       4058.28 |     11.001   |                1918.69 |            4.84367 |     3926   |     3523.7 |     3021.2 |      99   |      95.4 |      25.8 |
| [qgis218-smallfile > somap218_grundplanav_sw > av_sw_big.txt](../results/details/compare-filesize218/20201014-184559/qgis218-smallfile/somap218_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw_big.txt    |       5054.6 |                 0 |          5190 |            4 |  0.0770713 |       973.907 |           465   |          220 |        64068 |        1752   |       2274.85 |       6070.05 |     10.1685  |                3165.44 |            4.42867 |     8479.5 |     7039.5 |     3289.6 |      99.8 |      97.8 |      13.2 |
| [qgis218-smallfile > somap218_lk > lk_big.txt](../results/details/compare-filesize218/20201014-184559/qgis218-smallfile/somap218_lk/lk_big.txt/dashboard/index.html)                                     | somap_lk > lk_big.txt                   |       1431.1 |                 0 |          5262 |            0 |  0         |       271.961 |           127.5 |            5 |        54062 |         594   |        845.55 |       1682.11 |     36.4925  |                1857.9  |           18.4854  |     4940.5 |     3735.4 |     2408.2 |      99.5 |      96.4 |       8.7 |

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