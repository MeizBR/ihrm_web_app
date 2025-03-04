/**
 * RESTful API of iHRM
 *
 * This class is auto generated, see api/templates and
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
package api.generated.calendars



case class PostCalendar(
  name: String,
  description: Option[String],
  isPrivate: Option[Boolean],
  timeZone: Option[String]
)

object PostCalendar {
  given decoder: io.circe.Decoder[PostCalendar] = io.circe.generic.semiauto.deriveDecoder
  given encoder: io.circe.Encoder[PostCalendar] = io.circe.generic.semiauto.deriveEncoder
}

