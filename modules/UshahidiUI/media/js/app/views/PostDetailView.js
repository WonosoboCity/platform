/**
 * Post Detail
 *
 * @module     PostDetailView
 * @author     Ushahidi Team <team@ushahidi.com>
 * @copyright  2013 Ushahidi
 * @license    https://www.gnu.org/licenses/agpl-3.0.html GNU Affero General Public License Version 3 (AGPL3)
 */

define(['views/PostItemView', 'text!templates/PostDetail.html'],
	function( PostItemView, template)
	{
		//CollectionView provides some default rendering logic
		return PostItemView.extend(
		{
			//Template HTML string
			template: Handlebars.compile(template),

			modelEvents: {
				'sync': 'render',
				'destroy' : 'handleDeleted'
			},

			handleDeleted : function()
			{
				window.history.back();
				// Trigger a fetch. This is to remove the model from the listing and load another
				App.Collections.Posts.fetch();
			}

		});
	});
