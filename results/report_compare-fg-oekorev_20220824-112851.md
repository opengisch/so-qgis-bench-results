# QGIS Benchmark summary compare-fg-oekorev (20220824-112851)


compare different versions of QGIS servers using the same settings and a working map request

_run completed in 00h 09m 31s_

_Sample size per configuration 18_
## Summary plot
An interactive summary plot can be found [here](report_compare-fg-oekorev_20220824-112851_plot.html)

## Summary
| name          | group   |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------------|---------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218_small | Global  |              4.8 | +0.0%                    |               3.2 | +0.0%                     |            2.2 | +0.0%                  |           119.5 | +0.4%                   |           67 |          213 |              2.7 |            18 |            0 |     -inf   |      nan   |      inf   |    -inf   |     nan   |     inf   |          0 |
| qgis322_big   | Global  |              4.8 | +0.0%                    |             291.4 | +9006.2%                  |            3   | +40.0%                 |           177   | +48.7%                  |           72 |          335 |              2.9 |            18 |            0 |    12650.5 |    12650.5 |    12650.5 |       2.9 |       2.9 |       2.9 |          0 |
| qgis322_small | Global  |              4.9 | +2.1%                    |               3.2 | +0.0%                     |            2.3 | +5.3%                  |           119   | +0.0%                   |           69 |          225 |              3   |            18 |            0 |     7342.9 |     7342.9 |     7342.9 |       6.8 |       6.8 |       6.8 |          0 |
| qgis218_big   | Global  |             10.5 | +118.8%                  |             189.8 | +5831.2%                  |           50.3 | +2229.3%               |          2490.5 | +1992.9%                |           77 |         6524 |              2.7 |            18 |            0 |    11020.3 |    10443.3 |     9615.1 |      60.8 |      38.3 |       3.3 |          0 |

## Aggregated
| name                                | group            |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|-------------------------------------|------------------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218_small > somap218_fg_oekorev | somap_fg_oekorev |              4.8 | +0.0%                    |               3.2 | +0.0%                     |            2.2 | +0.0%                  |           119.5 | +0.4%                   |           67 |          213 |              2.7 |            18 |            0 |     -inf   |      nan   |      inf   |    -inf   |     nan   |     inf   |          0 |
| qgis322_small > somap322_fg_oekorev | somap_fg_oekorev |              4.9 | +2.1%                    |               3.2 | +0.0%                     |            2.3 | +5.3%                  |           119   | +0.0%                   |           69 |          225 |              3   |            18 |            0 |     7342.9 |     7342.9 |     7342.9 |       6.8 |       6.8 |       6.8 |          0 |
| qgis322_big > somap322_fix          | somap_fix        |              4.8 | +0.0%                    |             291.4 | +53.5%                    |            3   | +0.0%                  |           177   | +0.0%                   |           72 |          335 |              2.9 |            18 |            0 |    12650.5 |    12650.5 |    12650.5 |       2.9 |       2.9 |       2.9 |          0 |
| qgis218_big > somap218_fix          | somap_fix        |             10.5 | +118.8%                  |             189.8 | +0.0%                     |           50.3 | +1563.2%               |          2490.5 | +1307.1%                |           77 |         6524 |              2.7 |            18 |            0 |    11020.3 |    10443.3 |     9615.1 |      60.8 |      38.3 |       3.3 |          0 |

## Detail
| name                                                                                                                                                                                | group                             |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218_small > somap218_fg_oekorev > fg_oekorev.txt](../results/details/compare-fg-oekorev/20220824-112851/qgis218_small/somap218_fg_oekorev/fg_oekorev.txt/dashboard/index.html) | somap_fg_oekorev > fg_oekorev.txt |              4.8 | +0.0%                    |               3.2 | +0.0%                     |            2.2 | +0.0%                  |           119.5 | +0.4%                   |            18 |            0 |          0 |       120     |           67 |          213 |         205.8 |           213 |           213 |      30.2521 |               4680.91  |           11.6991  |              2.7 |      nan   |      nan   |      nan   |     nan   |     nan   |     nan   |
| [qgis322_small > somap322_fg_oekorev > fg_oekorev.txt](../results/details/compare-fg-oekorev/20220824-112851/qgis322_small/somap322_fg_oekorev/fg_oekorev.txt/dashboard/index.html) | somap_fg_oekorev > fg_oekorev.txt |              4.9 | +2.1%                    |               3.2 | +0.0%                     |            2.3 | +5.3%                  |           119   | +0.0%                   |            18 |            0 |          0 |       126.333 |           69 |          225 |         209.7 |           225 |           225 |      29.4599 |               5010.15  |           11.3927  |              3   |     7342.9 |     7342.9 |     7342.9 |       6.8 |       6.8 |       6.8 |
| [qgis322_big > somap322_fix > fg_oekorev.txt](../results/details/compare-fg-oekorev/20220824-112851/qgis322_big/somap322_fix/fg_oekorev.txt/dashboard/index.html)                   | somap_fix > fg_oekorev.txt        |              4.8 | +0.0%                    |             291.4 | +53.5%                    |            3   | +0.0%                  |           177   | +0.0%                   |            18 |            0 |          0 |       168.056 |           72 |          335 |         284.6 |           335 |           335 |      20.7135 |               3466.26  |            7.86869 |              2.9 |    12650.5 |    12650.5 |    12650.5 |       2.9 |       2.9 |       2.9 |
| [qgis218_big > somap218_fix > fg_oekorev.txt](../results/details/compare-fg-oekorev/20220824-112851/qgis218_big/somap218_fix/fg_oekorev.txt/dashboard/index.html)                   | somap_fix > fg_oekorev.txt        |             10.5 | +118.8%                  |             189.8 | +0.0%                     |           50.3 | +1563.2%               |          2490.5 | +1307.1%                |            18 |            0 |          0 |      2795.11  |           77 |         6524 |        6517.7 |          6524 |          6524 |       2.7133 |                419.829 |            1.03073 |              2.7 |    11020.3 |    10443.3 |     9615.1 |      60.8 |      38.3 |       3.3 |

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

  qgis218_small:
    active: yes
    inherit: base
    template: docker-compose-qgis-2
    path-prefix: 'ows'
    projects:
      somap218_fg_oekorev:
        - fg_oekorev.txt

  qgis218_big:
    active: yes
    inherit: base
    template: docker-compose-qgis-2
    path-prefix: 'ows'
    projects:
      somap218_fix:
        - fg_oekorev.txt

  qgis322_small:
    active: yes
    inherit: base
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.22'
    projects:
      somap322_fg_oekorev:
        - fg_oekorev.txt

  qgis322_big:
    active: yes
    inherit: base
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.22'
    projects:
      somap322_fix:
        - fg_oekorev.txt
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
  qgis218_big:
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
  qgis218_small:
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
      somap218_fg_oekorev:
      - fg_oekorev.txt
    template: docker-compose-qgis-2
  qgis322_big:
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
      somap322_fix:
      - fg_oekorev.txt
    template: docker-compose-qgis-3-nginx
  qgis322_small:
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
      somap322_fg_oekorev:
      - fg_oekorev.txt
    template: docker-compose-qgis-3-nginx

```