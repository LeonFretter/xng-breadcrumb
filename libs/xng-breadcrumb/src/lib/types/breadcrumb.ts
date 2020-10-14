/**
 * Breadcrumb item built internally, private to this module
 */
export interface Breadcrumb {
  /**
   * actual route path with resolved param. Ex /mentor/2, connect/edit
   */
  routeLink?: string;
  /**
   * route with path params converted to a RegExp
   * path '/mentor/:id' becomes routeRegex '/mentor/[^/]+', which can be matched against when needed
   */
  routeRegex?: string;
  /**
   * This is additional info on each breadcrumb item whether label is auto generated or user specified
   * isAutoGeneratedLabel has to be present at component level but not at the service,
   * since we may need to support multiple breadcrumb components in same app
   */
  isAutoGeneratedLabel?: boolean;
  /**
   * Query params in string form.
   */
  queryParams?: any;
  fragment?: string;
  routeInterceptor?: (routeLink: string, breadcrumb: Breadcrumb) => string;
}