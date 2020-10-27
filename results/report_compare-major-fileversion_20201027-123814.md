# QGIS Benchmark summary compare-major-fileversion (20201027-123814)


compare different version of QGIS servers using the same settings

_run completed in 00h 00m 35s_
## Summary plot
An interactive summary plot can be found [here](report_compare-major-fileversion_20201027-123814_plot.html)

## Summary
| name            | group   |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|-----------------|---------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis316-310file | Global  |          6.4 |               0   |            30 |            0 |     -inf   |      nan   |      inf   |    -inf   |     nan   |     inf   |          0 |
| qgis316-218file | Global  |          6.7 |               4.6 |            30 |            0 |     -inf   |      nan   |      inf   |    -inf   |     nan   |     inf   |          0 |
| qgis316         | Global  |          6.9 |               7.8 |            30 |            0 |     2112.2 |     2084.8 |     2057.4 |      32   |      19.9 |       7.8 |          0 |
| qgis310         | Global  |         14.9 |             131.4 |            30 |            0 |     2095   |     2095   |     2095   |       8.4 |       8.4 |       8.4 |          0 |
| qgis310-218file | Global  |         15.1 |             135   |            30 |            0 |     2113.3 |     2113.3 |     2113.3 |       8.2 |       8.2 |       8.2 |          0 |

## Aggregated
| name                          | group    |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|-------------------------------|----------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis316-310file > somap310_lk | somap_lk |          6.4 |               0   |            30 |            0 |     -inf   |      nan   |      inf   |    -inf   |     nan   |     inf   |          0 |
| qgis316-218file > somap218_lk | somap_lk |          6.7 |               4.6 |            30 |            0 |     -inf   |      nan   |      inf   |    -inf   |     nan   |     inf   |          0 |
| qgis316 > somap316_lk         | somap_lk |          6.9 |               7.8 |            30 |            0 |     2112.2 |     2084.8 |     2057.4 |      32   |      19.9 |       7.8 |          0 |
| qgis310 > somap310_lk         | somap_lk |         14.9 |             131.4 |            30 |            0 |     2095   |     2095   |     2095   |       8.4 |       8.4 |       8.4 |          0 |
| qgis310-218file > somap218_lk | somap_lk |         15.1 |             135   |            30 |            0 |     2113.3 |     2113.3 |     2113.3 |       8.2 |       8.2 |       8.2 |          0 |

## Detail
| name                                                                                                                                                           | group             |   duration s |   group penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|--------------|-------------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis316-310file > somap310_lk > lk.txt](../results/details/compare-major-fileversion/20201027-123814/qgis316-310file/somap310_lk/lk.txt/dashboard/index.html) | somap_lk > lk.txt |          6.4 |               0   |            30 |            0 |          0 |       214.267 |           206   |          115 |          335 |         305.7 |        329.5  |           335 |      26.6193 |                721.417 |           10.8592  |      nan   |      nan   |      nan   |     nan   |     nan   |     nan   |
| [qgis316-218file > somap218_lk > lk.txt](../results/details/compare-major-fileversion/20201027-123814/qgis316-218file/somap218_lk/lk.txt/dashboard/index.html) | somap_lk > lk.txt |          6.7 |               4.6 |            30 |            0 |          0 |       224.167 |           217.5 |          128 |          329 |         310.7 |        327.35 |           329 |      26.7618 |                725.278 |           10.9173  |      nan   |      nan   |      nan   |     nan   |     nan   |     nan   |
| [qgis316 > somap316_lk > lk.txt](../results/details/compare-major-fileversion/20201027-123814/qgis316/somap316_lk/lk.txt/dashboard/index.html)                 | somap_lk > lk.txt |          6.9 |               7.8 |            30 |            0 |          0 |       231.033 |           221.5 |          139 |          341 |         311.8 |        334.95 |           341 |      25.5319 |                691.946 |           10.4156  |     2112.2 |     2084.8 |     2057.4 |      32   |      19.9 |       7.8 |
| [qgis310 > somap310_lk > lk.txt](../results/details/compare-major-fileversion/20201027-123814/qgis310/somap310_lk/lk.txt/dashboard/index.html)                 | somap_lk > lk.txt |         14.9 |             131.4 |            30 |            0 |          0 |       495.8   |           554   |          225 |          667 |         663.6 |        665.9  |           667 |      14.4509 |                391.665 |            5.89513 |     2095   |     2095   |     2095   |       8.4 |       8.4 |       8.4 |
| [qgis310-218file > somap218_lk > lk.txt](../results/details/compare-major-fileversion/20201027-123814/qgis310-218file/somap218_lk/lk.txt/dashboard/index.html) | somap_lk > lk.txt |         15.1 |             135   |            30 |            0 |          0 |       503.6   |           547   |          241 |          650 |         645.8 |        648.9  |           650 |      14.1777 |                384.261 |            5.78369 |     2113.3 |     2113.3 |     2113.3 |       8.2 |       8.2 |       8.2 |

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
  qgis310:
    active: yes
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.10'
      QGIS_REPLICAS: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_FCGI_PROCESSES: '1'
      PG_SERVICE: 'pg_service.conf'
    projects:
      somap310_lk:
        - lk.txt
  qgis310-218file:
    inherit: qgis310
    projects:
      somap218_lk:
        - lk.txt

  qgis316:
    active: yes
    inherit: qgis310
    compose-variables:
      QGIS_VERSION: '3.16'
    projects:
      somap316_lk:
        - lk.txt
  qgis316-218file:
    inherit: qgis316
    projects:
      somap218_lk:
        - lk.txt
  qgis316-310file:
    inherit: qgis316
    projects:
      somap310_lk:
        - lk.txt

```
### parsed test configurations

```
description: compare different version of QGIS servers using the same settings
test-cases:
  qgis310:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_VERSION: '3.10'
    path-prefix: ogc
    projects:
      somap310_lk:
      - lk.txt
    template: docker-compose-qgis-3-nginx
  qgis310-218file:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_VERSION: '3.10'
    inherit: qgis310
    path-prefix: ogc
    projects:
      somap218_lk:
      - lk.txt
    template: docker-compose-qgis-3-nginx
  qgis316:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_VERSION: '3.16'
    inherit: qgis310
    path-prefix: ogc
    projects:
      somap316_lk:
      - lk.txt
    template: docker-compose-qgis-3-nginx
  qgis316-218file:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_VERSION: '3.16'
    inherit: qgis316
    path-prefix: ogc
    projects:
      somap218_lk:
      - lk.txt
    template: docker-compose-qgis-3-nginx
  qgis316-310file:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_VERSION: '3.16'
    inherit: qgis316
    path-prefix: ogc
    projects:
      somap310_lk:
      - lk.txt
    template: docker-compose-qgis-3-nginx

```