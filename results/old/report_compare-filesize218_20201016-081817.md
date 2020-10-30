# QGIS Benchmark summary compare-filesize218 (20201016-081817)


compare the effect of different QGIS project file size in QGIS 2.18

_run completed in 00h 28m 46s_
## Summary plot
An interactive summary plot can be found [here](report_compare-filesize218_20201016-081817_plot.html)

## Summary
| name              | group   |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|-------------------|---------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-smallfile | Global  |       7474.4 |               0   |         11187 |           10 |     8352.8 |    4855.67 |     2486.7 |      99.9 |   95.8333 |       8.3 |        0.1 |
| qgis218-bigfile   | Global  |       9245.7 |              23.7 |         11187 |           11 |    10952.8 |    8535.5  |     3107.3 |      99.9 |   97.3    |      10.9 |        0.1 |

## Aggregated
| name                                            | group                    |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|-------------------------------------------------|--------------------------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-bigfile > somap218                      | somap                    |       9245.7 |                 0 |         11187 |           11 |    10952.8 |     8535.5 |     3107.3 |      99.9 |      97.3 |      10.9 |        0.1 |
| qgis218-smallfile > somap218_grundplanav_farbig | somap_grundplanav_farbig |        699.4 |                 0 |           735 |            0 |     4070.7 |     3687.9 |     3186.4 |      99   |      93.2 |      13.3 |        0   |
| qgis218-smallfile > somap218_grundplanav_sw     | somap_grundplanav_sw     |       5257.3 |                 0 |          5190 |            9 |     8352.8 |     7024.1 |     3425   |      99.9 |      98   |      13   |        0.2 |
| qgis218-smallfile > somap218_lk                 | somap_lk                 |       1517.7 |                 0 |          5262 |            1 |     5076.4 |     3855   |     2486.7 |      99.5 |      96.3 |       8.3 |        0   |

## Detail
| name                                                                                                                                                                                                     | group                                   |   duration s |   group penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|--------------|-------------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218-bigfile > somap218 > av_f_big.txt](../results/details/compare-filesize218/20201016-081817/qgis218-bigfile/somap218/av_f_big.txt/dashboard/index.html)                                           | somap > av_f_big.txt                    |        822.5 |                 0 |           735 |            0 |  0         |      1119.08  |             720 |          257 |        39901 |        1548.4 |       2170.4  |       8308.76 |      8.78094 |                1863.49 |            3.70326 |     8279.3 |     7780   |     6853.8 |      99.8 |      96.3 |      30.3 |
| [qgis218-bigfile > somap218 > av_sw_big.txt](../results/details/compare-filesize218/20201016-081817/qgis218-bigfile/somap218/av_sw_big.txt/dashboard/index.html)                                         | somap > av_sw_big.txt                   |       6799.2 |                 0 |          5190 |           10 |  0.192678  |      1310.06  |             788 |          265 |        64069 |        1975.8 |       2627.05 |       6979.36 |      7.56574 |                4125.49 |            3.18427 |    10952.8 |    10287.5 |     7445.3 |      99.9 |      98.4 |      13.2 |
| [qgis218-bigfile > somap218 > lk_big.txt](../results/details/compare-filesize218/20201016-081817/qgis218-bigfile/somap218/lk_big.txt/dashboard/index.html)                                               | somap > lk_big.txt                      |       1624   |                 0 |          5262 |            1 |  0.0190042 |       308.624 |             138 |            7 |        64065 |         657.7 |        925    |       1906.5  |     32.231   |                1640.6  |           16.2323  |     8824.3 |     7539   |     3107.3 |      99.6 |      97.2 |      10.9 |
| [qgis218-smallfile > somap218_grundplanav_farbig > av_f_big.txt](../results/details/compare-filesize218/20201016-081817/qgis218-smallfile/somap218_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |        699.4 |                 0 |           735 |            0 |  0         |       951.614 |             585 |          219 |        56440 |        1308.4 |       1607.2  |       6520.08 |      9.96043 |                1743.49 |            4.38551 |     4070.7 |     3687.9 |     3186.4 |      99   |      93.2 |      13.3 |
| [qgis218-smallfile > somap218_grundplanav_sw > av_sw_big.txt](../results/details/compare-filesize218/20201016-081817/qgis218-smallfile/somap218_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw_big.txt    |       5257.3 |                 0 |          5190 |            9 |  0.17341   |      1012.97  |             485 |          223 |        64066 |        1828.7 |       2349.85 |       6056.98 |      9.77449 |                3040.25 |            4.25706 |     8352.8 |     7024.1 |     3425   |      99.9 |      98   |      13   |
| [qgis218-smallfile > somap218_lk > lk_big.txt](../results/details/compare-filesize218/20201016-081817/qgis218-smallfile/somap218_lk/lk_big.txt/dashboard/index.html)                                     | somap_lk > lk_big.txt                   |       1517.7 |                 0 |          5262 |            1 |  0.0190042 |       288.425 |             136 |            5 |        64065 |         638   |        912.55 |       1795.44 |     34.4099  |                1751.75 |           17.4305  |     5076.4 |     3855   |     2486.7 |      99.5 |      96.3 |       8.3 |

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