# QGIS Benchmark summary compare-filesize218 (20201028-061748)


compare the effect of different QGIS project file size in QGIS 2.18

_run completed in 00h 27m 46s_
## Summary plot
An interactive summary plot can be found [here](report_compare-filesize218_20201028-061748_plot.html)

## Summary
| name              | group   |   duration s |   medianResTime |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|-------------------|---------|--------------|-----------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-smallfile | Global  |       7209.3 |            1159 |               0   |         11187 |            7 |     7085   |    4427.7  |     2350   |      99.8 |   96.2667 |       9   |        0.1 |
| qgis218-bigfile   | Global  |       8947.6 |            1606 |              24.1 |         11187 |            6 |     8724.6 |    7813.73 |     2951.4 |      99.9 |   97.3    |      10.9 |        0.1 |

## Aggregated
| name                                            | group                    |   duration s |   medianResTime |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|-------------------------------------------------|--------------------------|--------------|-----------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-bigfile > somap218                      | somap                    |       8947.6 |            1606 |                 0 |         11187 |            6 |     8724.6 |    7813.73 |     2951.4 |      99.9 |      97.3 |      10.9 |        0.1 |
| qgis218-smallfile > somap218_grundplanav_farbig | somap_grundplanav_farbig |        662.3 |             553 |                 0 |           735 |            0 |     3911.5 |    3489.7  |     2988.9 |      99   |      95   |      25.4 |        0   |
| qgis218-smallfile > somap218_grundplanav_sw     | somap_grundplanav_sw     |       5100.9 |             475 |                 0 |          5190 |            7 |     7085   |    6118.4  |     3243.6 |      99.8 |      97.7 |      13.4 |        0.1 |
| qgis218-smallfile > somap218_lk                 | somap_lk                 |       1446.1 |             131 |                 0 |          5262 |            0 |     4614.3 |    3675    |     2350   |      99.6 |      96.1 |       9   |        0   |

## Detail
| name                                                                                                                                                                                                     | group                                   |   duration s |   group penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|--------------|-------------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218-bigfile > somap218 > av_f_big.txt](../results/details/compare-filesize218/20201028-061748/qgis218-bigfile/somap218/av_f_big.txt/dashboard/index.html)                                           | somap > av_f_big.txt                    |        782.9 |                 0 |           735 |            0 |   0        |      1065.14  |             701 |          255 |        33285 |        1466.6 |       2112.2  |       8142.84 |      9.16596 |                1945.09 |            3.86563 |     8021.7 |     7629.7 |     6738.3 |      99.9 |      96.5 |      31.2 |
| [qgis218-bigfile > somap218 > av_sw_big.txt](../results/details/compare-filesize218/20201028-061748/qgis218-bigfile/somap218/av_sw_big.txt/dashboard/index.html)                                         | somap > av_sw_big.txt                   |       6622.8 |                 0 |          5190 |            6 |   0.115607 |      1276.08  |             771 |          269 |        64070 |        1904.9 |       2510.25 |       7149.25 |      7.77186 |                4235.88 |            3.27102 |     8724.6 |     8485.3 |     7346.4 |      99.9 |      98.3 |      13.4 |
| [qgis218-bigfile > somap218 > lk_big.txt](../results/details/compare-filesize218/20201028-061748/qgis218-bigfile/somap218/lk_big.txt/dashboard/index.html)                                               | somap > lk_big.txt                      |       1541.9 |                 0 |          5262 |            0 |   0        |       293.028 |             134 |            7 |        36180 |         623.7 |        892.85 |       1770.74 |     33.9379  |                1727.72 |           17.0919  |     8267   |     7326.2 |     2951.4 |      99.9 |      97.1 |      10.9 |
| [qgis218-smallfile > somap218_grundplanav_farbig > av_f_big.txt](../results/details/compare-filesize218/20201028-061748/qgis218-smallfile/somap218_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |        662.3 |                 0 |           735 |            0 |   0        |       901.094 |             553 |          216 |        40515 |        1281.2 |       1621.8  |       7167.88 |     10.8858  |                1905.05 |            4.79295 |     3911.5 |     3489.7 |     2988.9 |      99   |      95   |      25.4 |
| [qgis218-smallfile > somap218_grundplanav_sw > av_sw_big.txt](../results/details/compare-filesize218/20201028-061748/qgis218-smallfile/somap218_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw_big.txt    |       5100.9 |                 0 |          5190 |            7 |   0.134875 |       982.832 |             475 |          217 |        64066 |        1775.9 |       2257.05 |       5860.49 |     10.0793  |                3133.62 |            4.38982 |     7085   |     6118.4 |     3243.6 |      99.8 |      97.7 |      13.4 |
| [qgis218-smallfile > somap218_lk > lk_big.txt](../results/details/compare-filesize218/20201028-061748/qgis218-smallfile/somap218_lk/lk_big.txt/dashboard/index.html)                                     | somap_lk > lk_big.txt                   |       1446.1 |                 0 |          5262 |            0 |   0        |       274.822 |             131 |            5 |        39052 |         597   |        858.7  |       1685.48 |     36.028   |                1834.15 |           18.2501  |     4614.3 |     3675   |     2350   |      99.6 |      96.1 |       9   |

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