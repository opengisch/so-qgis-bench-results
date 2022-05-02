# QGIS Benchmark summary compare-fg-oekorev (20220502-105313)


compare different versions of QGIS servers using the same settings and a working map request

_run completed in 00h 08m 34s_

_Sample size per configuration 18_
## Summary plot
An interactive summary plot can be found [here](report_compare-fg-oekorev_20220502-105313_plot.html)

## Summary
| name    | group   |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------|---------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis322 | Global  |              4.8 | +0.0%                    |             281.9 | +49.9%                    |            3.2 | +0.0%                  |           181.5 | +0.0%                   |           79 |          346 |              2.9 |            18 |            0 |     -inf   |      nan   |      inf   |    -inf   |     nan   |     inf   |          0 |
| qgis218 | Global  |             10.5 | +118.8%                  |             188   | +0.0%                     |           51   | +1484.3%               |          2933   | +1516.0%                |           76 |         6504 |              2.7 |            18 |            0 |     9882.3 |     9307.6 |     8473.1 |      59.9 |      40.2 |       2.2 |          0 |

## Aggregated
| name                   | group     |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|------------------------|-----------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis322 > somap318_fix | somap_fix |              4.8 | +0.0%                    |             281.9 | +49.9%                    |            3.2 | +0.0%                  |           181.5 | +0.0%                   |           79 |          346 |              2.9 |            18 |            0 |     -inf   |      nan   |      inf   |    -inf   |     nan   |     inf   |          0 |
| qgis218 > somap218_fix | somap_fix |             10.5 | +118.8%                  |             188   | +0.0%                     |           51   | +1484.3%               |          2933   | +1516.0%                |           76 |         6504 |              2.7 |            18 |            0 |     9882.3 |     9307.6 |     8473.1 |      59.9 |      40.2 |       2.2 |          0 |

## Detail
| name                                                                                                                                                      | group                      |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis322 > somap318_fix > fg_oekorev.txt](../results/details/compare-fg-oekorev/20220502-105313/qgis322/somap318_fix/fg_oekorev.txt/dashboard/index.html) | somap_fix > fg_oekorev.txt |              4.8 | +0.0%                    |             281.9 | +49.9%                    |            3.2 | +0.0%                  |           181.5 | +0.0%                   |            18 |            0 |          0 |       178.778 |           79 |          346 |         326.2 |           346 |           346 |     22.6986  |               3798.44  |            8.62281 |              2.9 |      nan   |      nan   |      nan   |     nan   |     nan   |     nan   |
| [qgis218 > somap218_fix > fg_oekorev.txt](../results/details/compare-fg-oekorev/20220502-105313/qgis218/somap218_fix/fg_oekorev.txt/dashboard/index.html) | somap_fix > fg_oekorev.txt |             10.5 | +118.8%                  |             188   | +0.0%                     |           51   | +1484.3%               |          2933   | +1516.0%                |            18 |            0 |          0 |      2832.39  |           76 |         6504 |        6295.2 |          6504 |          6504 |      2.70392 |                418.379 |            1.02717 |              2.7 |     9882.3 |     9307.6 |     8473.1 |      59.9 |      40.2 |       2.2 |

### used global configuration

```
cpu-cores: 4
deploy-method: docker-swarm
logs-dir: /home/mkuhn/so-qgis-bench/logs/prepared
parallel-requests: 10
reports-dir: ./reports/
result-dir: /home/mkuhn/so-qgis-bench/results

```
### test configurations

```
description: 'compare different versions of QGIS servers using the same settings and a working map request'
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
      somap218_fix:
        - fg_oekorev.txt
#      somap218_fg_oekorev:
#        - fg_oekorev.txt

  qgis322:
    active: yes
    inherit: base
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.22'
    projects:
      somap318_fix:
        - fg_oekorev.txt
#      somap318_fg_oekorev:
#        - fg_oekorev.txt
```
### parsed test configurations

```
description: compare different versions of QGIS servers using the same settings and
  a working map request
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
      somap218_fix:
      - fg_oekorev.txt
    template: docker-compose-qgis-2
  qgis322:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.22'
    inherit: base
    path-prefix: ogc
    projects:
      somap318_fix:
      - fg_oekorev.txt
    template: docker-compose-qgis-3-nginx

```