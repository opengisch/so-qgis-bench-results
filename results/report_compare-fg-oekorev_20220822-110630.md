# QGIS Benchmark summary compare-fg-oekorev (20220822-110630)


compare different versions of QGIS servers using the same settings and a working map request

_run completed in 00h 07m 44s_

_Sample size per configuration 18_
## Summary plot
An interactive summary plot can be found [here](report_compare-fg-oekorev_20220822-110630_plot.html)

## Summary
| name          | group   |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------------|---------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218_small | Global  |              4.9 | +0.0%                    |               3.4 | +13.3%                    |            2.2 | +0.0%                  |           120.5 | +0.0%                   |           69 |          221 |              2.7 |            18 |            0 |     6072.3 |     6072.3 |     6072.3 |       1.1 |       1.1 |       1.1 |          0 |
| qgis322_small | Global  |              5   | +2.0%                    |               3   | +0.0%                     |            2.3 | +4.7%                  |           120.5 | +0.0%                   |           72 |          202 |              3   |            18 |            0 |     -inf   |      nan   |      inf   |    -inf   |     nan   |     inf   |          0 |
| qgis218_big   | Global  |             10.6 | +116.3%                  |             174.2 | +5706.7%                  |           51.1 | +2237.3%               |          2670.5 | +2116.2%                |           76 |         6551 |              2.7 |            18 |            0 |     9862.7 |     9230.3 |     8448.5 |      61.9 |      40.3 |       3.9 |          0 |
| qgis322_big   | Global  |             27.9 | +469.4%                  |             177.2 | +5806.7%                  |           49.7 | +2171.6%               |           203   | +68.5%                  |           81 |        23461 |              2.9 |            18 |            0 |     9796.1 |     9709.8 |     8799   |      16.5 |       5.2 |       3.3 |          0 |

## Aggregated
| name                                | group            |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|-------------------------------------|------------------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218_small > somap218_fg_oekorev | somap_fg_oekorev |              4.9 | +0.0%                    |               3.4 | +13.3%                    |            2.2 | +0.0%                  |           120.5 | +0.0%                   |           69 |          221 |              2.7 |            18 |            0 |     6072.3 |     6072.3 |     6072.3 |       1.1 |       1.1 |       1.1 |          0 |
| qgis322_small > somap318_fg_oekorev | somap_fg_oekorev |              5   | +2.0%                    |               3   | +0.0%                     |            2.3 | +4.7%                  |           120.5 | +0.0%                   |           72 |          202 |              3   |            18 |            0 |     -inf   |      nan   |      inf   |    -inf   |     nan   |     inf   |          0 |
| qgis218_big > somap218_fix          | somap_fix        |             10.6 | +0.0%                    |             174.2 | +0.0%                     |           51.1 | +2.9%                  |          2670.5 | +1215.5%                |           76 |         6551 |              2.7 |            18 |            0 |     9862.7 |     9230.3 |     8448.5 |      61.9 |      40.3 |       3.9 |          0 |
| qgis322_big > somap318_fix          | somap_fix        |             27.9 | +163.2%                  |             177.2 | +1.7%                     |           49.7 | +0.0%                  |           203   | +0.0%                   |           81 |        23461 |              2.9 |            18 |            0 |     9796.1 |     9709.8 |     8799   |      16.5 |       5.2 |       3.3 |          0 |

## Detail
| name                                                                                                                                                                                | group                             |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218_small > somap218_fg_oekorev > fg_oekorev.txt](../results/details/compare-fg-oekorev/20220822-110630/qgis218_small/somap218_fg_oekorev/fg_oekorev.txt/dashboard/index.html) | somap_fg_oekorev > fg_oekorev.txt |              4.9 | +0.0%                    |               3.4 | +13.3%                    |            2.2 | +0.0%                  |           120.5 | +0.0%                   |            18 |            0 |          0 |       121.556 |           69 |          221 |         185.9 |           221 |           221 |     29.3638  |               4543.46  |           11.3555  |              2.7 |     6072.3 |     6072.3 |     6072.3 |       1.1 |       1.1 |       1.1 |
| [qgis322_small > somap318_fg_oekorev > fg_oekorev.txt](../results/details/compare-fg-oekorev/20220822-110630/qgis322_small/somap318_fg_oekorev/fg_oekorev.txt/dashboard/index.html) | somap_fg_oekorev > fg_oekorev.txt |              5   | +2.0%                    |               3   | +0.0%                     |            2.3 | +4.7%                  |           120.5 | +0.0%                   |            18 |            0 |          0 |       127.222 |           72 |          202 |         186.7 |           202 |           202 |     28.2575  |               4805.65  |           10.9277  |              3   |      nan   |      nan   |      nan   |     nan   |     nan   |     nan   |
| [qgis218_big > somap218_fix > fg_oekorev.txt](../results/details/compare-fg-oekorev/20220822-110630/qgis218_big/somap218_fix/fg_oekorev.txt/dashboard/index.html)                   | somap_fix > fg_oekorev.txt        |             10.6 | +0.0%                    |             174.2 | +0.0%                     |           51.1 | +2.9%                  |          2670.5 | +1215.5%                |            18 |            0 |          0 |      2841.11  |           76 |         6551 |        6416.9 |          6551 |          6551 |      2.6734  |                413.656 |            1.01558 |              2.7 |     9862.7 |     9230.3 |     8448.5 |      61.9 |      40.3 |       3.9 |
| [qgis322_big > somap318_fix > fg_oekorev.txt](../results/details/compare-fg-oekorev/20220822-110630/qgis322_big/somap318_fix/fg_oekorev.txt/dashboard/index.html)                   | somap_fix > fg_oekorev.txt        |             27.9 | +163.2%                  |             177.2 | +1.7%                     |           49.7 | +0.0%                  |           203   | +0.0%                   |            18 |            0 |          0 |      2761.28  |           81 |        23461 |       23419.6 |         23461 |         23461 |      0.75339 |                126.075 |            0.2862  |              2.9 |     9796.1 |     9709.8 |     8799   |      16.5 |       5.2 |       3.3 |

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
      somap318_fg_oekorev:
        - fg_oekorev.txt

  qgis322_big:
    active: yes
    inherit: base
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.22'
    projects:
      somap318_fix:
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
      somap318_fix:
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
      somap318_fg_oekorev:
      - fg_oekorev.txt
    template: docker-compose-qgis-3-nginx

```