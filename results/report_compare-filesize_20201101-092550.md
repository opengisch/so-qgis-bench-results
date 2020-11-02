# QGIS Benchmark summary compare-filesize (20201101-092550)


compare the effect of different QGIS project file size in QGIS 2.18

_run completed in 00h 06m 49s_

_Sample size per configuration 11187_
## Summary plot
An interactive summary plot can be found [here](report_compare-filesize_20201101-092550_plot.html)

## Summary
| name            | group   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|-----------------|---------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-bigfile | Global  |                360.3 | +0.0%                        |         3388.1 | +0.0%                  |             590 | +0.0%                   |          389 |       121906 |         11187 |            1 |     9358.7 |    7973.83 |     4890.3 |       100 |   97.6667 |        33 |          0 |

## Aggregated
| name                           | group     |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|--------------------------------|-----------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-bigfile > somap218_fix | somap_fix |                360.3 | +0.0%                        |         3388.1 | +0.0%                  |             590 | +0.0%                   |          389 |       121906 |         11187 |            1 |     9358.7 |    7973.83 |     4890.3 |       100 |   97.6667 |        33 |          0 |

## Detail
| name                                                                                                                                                                  | group                     |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218-bigfile > somap218_fix > av_f_big.txt](../results/details/compare-filesize/20201101-092550/qgis218-bigfile/somap218_fix/av_f_big.txt/dashboard/index.html)   | somap_fix > av_f_big.txt  |                 32.4 | +0.0%                        |          250.8 | +0.0%                  |             226 | +0.0%                   |           735 |            0 |  0         |       341.21  |          184 |        19647 |         435.4 |        639    |        901.28 |      27.9627 |                832.124 |            11.9022 |     7787.8 |     7682.2 |     7616.9 |     100   |      96.8 |      39.7 |
| [qgis218-bigfile > somap218_fix > av_sw_big.txt](../results/details/compare-filesize/20201101-092550/qgis218-bigfile/somap218_fix/av_sw_big.txt/dashboard/index.html) | somap_fix > av_sw_big.txt |                230.5 | +0.0%                        |         2234.8 | +0.0%                  |             300 | +0.0%                   |          5190 |            1 |  0.0192678 |       430.596 |          202 |        64065 |         522   |        669    |        928.09 |      23.134  |                261.732 |             9.827  |     9358.7 |     8552.3 |     7768.5 |      99.9 |      99   |      34.3 |
| [qgis218-bigfile > somap218_fix > lk_big.txt](../results/details/compare-filesize/20201101-092550/qgis218-bigfile/somap218_fix/lk_big.txt/dashboard/index.html)       | somap_fix > lk_big.txt    |                 97.4 | +0.0%                        |          902.5 | +0.0%                  |              64 | +0.0%                   |          5262 |            0 |  0         |       171.51  |            3 |        38194 |         347   |        575.85 |        991.74 |      57.6803 |                359.029 |            29.2745 |     8335.9 |     7687   |     4890.3 |      99.9 |      97.2 |      33   |

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
    compose-variables:
      QGIS_REPLICAS: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_FCGI_PROCESSES: '1'
      PG_SERVICE: 'pg_service.conf'

  qgis218-bigfile:
    active: yes
    inherit: base
    template: docker-compose-qgis-2
    path-prefix: 'ows'
    projects:
      somap218_fix:
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

  qgis316-bigfile:
    active: yes
    inherit: base
    template: docker-compose-qgis-3
    path-prefix: 'ogc'
    projects:
      somap316_fix:
        - lk_big.txt
        - av_f_big.txt
        - av_sw_big.txt

  qgis316-smallfile:
    inherit: base
    active: yes
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
      somap218_fix:
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
    projects:
      somap218_grundplanav_farbig:
      - av_f_big.txt
      somap218_grundplanav_sw:
      - av_sw_big.txt
      somap218_lk:
      - lk_big.txt
  qgis316-bigfile:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '50'
    inherit: base
    path-prefix: ogc
    projects:
      somap316_fix:
      - lk_big.txt
      - av_f_big.txt
      - av_sw_big.txt
    template: docker-compose-qgis-3
  qgis316-smallfile:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '50'
    inherit: base
    projects:
      somap316_grundplanav_farbig:
      - av_f_big.txt
      somap316_grundplanav_sw:
      - av_sw_big.txt
      somap316_lk:
      - lk_big.txt

```