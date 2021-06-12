// Copyright (c) 2021, ERPNext Community and contributors
// For license information, please see license.txt

frappe.ui.form.on('Improvement', {
	refresh: function(frm) {
		frm.add_custom_button(
			__('Build'), () => frm.trigger('queue_build'), __('Queue')
		);
		frm.add_custom_button(
			__('Upgrade'), () => frm.trigger('queue_upgrade'), __('Queue')
		);
		frm.add_custom_button(
			__('Delete'), () => frm.trigger('queue_delete'), __('Queue')
		);
	},
	queue_build: function(frm) {
		frappe.call({
			method: 'erpnext_feature_board.erpnext_feature_board.doctype.improvement.improvement.queue_deployment',
			args: { improvement_name: frm.doc.name },
			callback: () => frm.refresh()
		});
	},
	queue_upgrade: function(frm) {
		frappe.call({
			method: 'erpnext_feature_board.erpnext_feature_board.doctype.improvement.improvement.queue_upgrade',
			args: { improvement_name: frm.doc.name },
			callback: () => frm.refresh()
		});
	},
	queue_delete: function(frm) {
		frappe.call({
			method: 'erpnext_feature_board.erpnext_feature_board.doctype.improvement.improvement.queue_delete',
			args: { improvement_name: frm.doc.name },
			callback: () => frm.refresh()
		});
	},
});
