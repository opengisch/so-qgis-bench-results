# QGIS Benchmark summary compare-fg-oekorev (20220824-111706)


compare different versions of QGIS servers using the same settings and a working map request

_run completed in 00h 04m 34s_

_Sample size per configuration 18_
## Summary plot
An interactive summary plot can be found [here](report_compare-fg-oekorev_20220824-111706_plot.html)

## Summary
| name          | group   |   tests duration | tests duration penalty   |   warmup duration |   warmup duration penalty |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------------|---------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218_small | Global  |              4.7 | +0.0%                    |               3.4 |                         0 |            2.1 | +2816.7%               |           113.5 | +3683.3%                |           66 |          208 |              2.7 |            18 |            0 |     -inf   |      nan   |      inf   |    -inf   |     nan   |     inf   |          0 |
| qgis322_small | Global  |              4.8 | +2.1%                    |               0   |                         0 |            0.1 | +8.3%                  |             3   | +0.0%                   |            3 |           24 |              0   |            18 |           18 |     -inf   |      nan   |      inf   |    -inf   |     nan   |     inf   |        100 |
| qgis322_big   | Global  |              6.3 | +34.0%                   |               0   |                         0 |            0.1 | +0.0%                  |             3   | +0.0%                   |            2 |           23 |              0   |            18 |           18 |     6686   |     6686   |     6686   |       6.2 |       6.2 |       6.2 |        100 |
| qgis218_big   | Global  |             10.5 | +123.4%                  |             186.1 |                         0 |           50.5 | +70062.5%              |          2748   | +91500.0%               |           84 |         6597 |              2.7 |            18 |            0 |    10313.2 |     9724.9 |     8909.1 |      60.4 |      39.8 |       3.3 |          0 |

## Aggregated
| name                                | group            |   tests duration | tests duration penalty   |   warmup duration |   warmup duration penalty |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|-------------------------------------|------------------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218_small > somap218_fg_oekorev | somap_fg_oekorev |              4.7 | +0.0%                    |               3.4 |                         0 |            2.1 | +2592.3%               |           113.5 | +3683.3%                |           66 |          208 |              2.7 |            18 |            0 |     -inf   |      nan   |      inf   |    -inf   |     nan   |     inf   |          0 |
| qgis322_small > somap322_fg_oekorev | somap_fg_oekorev |              4.8 | +2.1%                    |               0   |                         0 |            0.1 | +0.0%                  |             3   | +0.0%                   |            3 |           24 |              0   |            18 |           18 |     -inf   |      nan   |      inf   |    -inf   |     nan   |     inf   |        100 |
| qgis322_big > somap322_fix          | somap_fix        |              6.3 | +0.0%                    |               0   |                         0 |            0.1 | +0.0%                  |             3   | +0.0%                   |            2 |           23 |              0   |            18 |           18 |     6686   |     6686   |     6686   |       6.2 |       6.2 |       6.2 |        100 |
| qgis218_big > somap218_fix          | somap_fix        |             10.5 | +66.7%                   |             186.1 |                         0 |           50.5 | +70062.5%              |          2748   | +91500.0%               |           84 |         6597 |              2.7 |            18 |            0 |    10313.2 |     9724.9 |     8909.1 |      60.4 |      39.8 |       3.3 |          0 |

## Detail
| name                                                                                                                                                                                | group                             |   tests duration | tests duration penalty   |   warmup duration |   warmup duration penalty |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218_small > somap218_fg_oekorev > fg_oekorev.txt](../results/details/compare-fg-oekorev/20220824-111706/qgis218_small/somap218_fg_oekorev/fg_oekorev.txt/dashboard/index.html) | somap_fg_oekorev > fg_oekorev.txt |              4.7 | +0.0%                    |               3.4 |                         0 |            2.1 | +2592.3%               |           113.5 | +3683.3%                |            18 |            0 |          0 |     116.667   |           66 |          208 |         187.3 |           208 |           208 |     31.1419  |               4818.59  |           12.0431  |              2.7 |      nan   |      nan   |      nan   |     nan   |     nan   |     nan   |
| [qgis322_small > somap322_fg_oekorev > fg_oekorev.txt](../results/details/compare-fg-oekorev/20220824-111706/qgis322_small/somap322_fg_oekorev/fg_oekorev.txt/dashboard/index.html) | somap_fg_oekorev > fg_oekorev.txt |              4.8 | +2.1%                    |               0   |                         0 |            0.1 | +0.0%                  |             3   | +0.0%                   |            18 |           18 |        100 |       4.33333 |            3 |           24 |           6   |            24 |            24 |    300       |                104.004 |          116.016   |              0   |      nan   |      nan   |      nan   |     nan   |     nan   |     nan   |
| [qgis322_big > somap322_fix > fg_oekorev.txt](../results/details/compare-fg-oekorev/20220824-111706/qgis322_big/somap322_fix/fg_oekorev.txt/dashboard/index.html)                   | somap_fix > fg_oekorev.txt        |              6.3 | +0.0%                    |               0   |                         0 |            0.1 | +0.0%                  |             3   | +0.0%                   |            18 |           18 |        100 |       4       |            2 |           23 |           6.8 |            23 |            23 |    310.345   |                107.59  |          117.895   |              0   |     6686   |     6686   |     6686   |       6.2 |       6.2 |       6.2 |
| [qgis218_big > somap218_fix > fg_oekorev.txt](../results/details/compare-fg-oekorev/20220824-111706/qgis218_big/somap218_fix/fg_oekorev.txt/dashboard/index.html)                   | somap_fix > fg_oekorev.txt        |             10.5 | +66.7%                   |             186.1 |                         0 |           50.5 | +70062.5%              |          2748   | +91500.0%               |            18 |            0 |          0 |    2806.5     |           84 |         6597 |        6357.6 |          6597 |          6597 |      2.69987 |                417.751 |            1.02563 |              2.7 |    10313.2 |     9724.9 |     8909.1 |      60.4 |      39.8 |       3.3 |

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